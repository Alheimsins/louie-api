const fetch = require('node-fetch')
const generateTemplate = require('../lib/generate-template')

module.exports = async (request, response) => {
  const { body: payload } = request
  const template = generateTemplate(payload)
  const options = {
    method: 'POST',
    body: JSON.stringify(template),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const data = await fetch(process.env.PDF_SERVICE_URL, options)
  const base64File = (await data.buffer()).toString('base64')
  response.send(`data:application/pdf;base64,${base64File}`)
}
