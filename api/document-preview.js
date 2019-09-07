const axios = require('axios')
const generateTemplate = require('../lib/generate-template')

module.exports = async (request, response) => {
  const payload = await request.body
  const template = generateTemplate(payload)
  const document = await axios.post(process.env.PDF_SERVICE_URL, template)
  response.send(document)
}
