const fetch = require('node-fetch')
const generateTemplate = require('../lib/generate-template')

module.exports = async (request, response) => {
  const { body: payload } = request
  const template = generateTemplate(payload)
  const options = {
    method: 'POST',
    body: JSON.stringify(template),
    headers: { 'Content-Type': 'application/json' }
  }
  const data = await fetch(process.env.PDF_SERVICE_URL, options)
  response.setHeader('Content-Type', 'application/pdf')
  response.send(data.buffer())
}
