const axios = require('axios')

module.exports = async (request, response) => {
  const template = await request.body
  const document = axios.post(process.env.PDF_SERVICE_URL, template)
  response.send(document)
}
