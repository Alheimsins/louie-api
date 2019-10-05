const axios = require('axios')
const { setupCache } = require('axios-cache-adapter')
const jwt = require('jsonwebtoken')
const logger = require('./logger')

// Config
const publicCertUrl = process.env.AUTH_PUBLIC_CERT_URL || 'https://www.googleapis.com/oauth2/v1/certs'
const issuer = process.env.AUTH_ISSUER || 'https://accounts.google.com'
const clientId = process.env.AUTH_CLIENT_ID || 'your-client-id.apps.googleusercontent.com'

const cache = setupCache({ maxAge: 600000 })

const instance = axios.create({
  timeout: 5000,
  adapter: cache.adapter
})

const getKeys = async () => {
  const { data: keys } = await instance.get(publicCertUrl)
  return keys
}

const validateToken = token => {
  if (token.payload.iss !== issuer) throw Error('Wrong issuer')
  if (token.payload.aud !== clientId) throw Error('Wrong audience')
}

module.exports = fn => {
  return async (request, response) => {
    logger('info', ['auth', 'start'])
    const { headers: { authorization } } = request
    const accessToken = authorization.replace('Bearer ', '')
    if (!accessToken) throw Error('Missing accessToken')

    try {
      const keys = await getKeys()
      const decodedToken = jwt.decode(accessToken, { complete: true })

      const publicCert = keys[decodedToken.header.kid]
      validateToken(decodedToken)

      request.user = jwt.verify(accessToken, publicCert)
      logger('info', ['auth', 'successful'])

      return fn(request, response)
    } catch (error) {
      logger('error', ['auth', 'unsuccessful', error.message])
      response.writeHead(401)
      response.end('invalid token in Authorization header')
    }
  }
}
