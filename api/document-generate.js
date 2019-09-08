const fetch = require('node-fetch')
const generateTemplate = require('../lib/generate-template')

module.exports = async (request, response) => {
  const payload = await request.body
  const template = generateTemplate(payload)
  const data = await fetch(process.env.PDF_SERVICE_URL, { method: 'POST', body: JSON.stringify(template), headers: { 'Content-Type': 'application/json' } }).then(response => response.buffer())
  response.send(data)
}
