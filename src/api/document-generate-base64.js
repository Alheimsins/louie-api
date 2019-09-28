const fetch = require('node-fetch')
const generateTemplate = require('../lib/generate-template')

module.exports = async (request, response) => {
  if (request.method.toLowerCase() === 'options') {
    response.send('')
  } else {
    const payload = await request.body
    const template = generateTemplate(payload)
    const options = {
      method: 'POST',
      body: JSON.stringify(template),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = await fetch(process.env.PDF_SERVICE_URL, options)
    const base64File = data.buffer().toString('base64')
    response.send(`data:application/pdf;base64,${base64File}`)
  }
}
