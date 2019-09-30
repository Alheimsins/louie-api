const pdfmake = require('@alheimsins/pdf-make')
const generateTemplate = require('../lib/generate-template')
const logger = require('../lib/logger')

module.exports = async (request, response) => {
  const { body } = request
  try {
    const template = generateTemplate(body)
    const data = await pdfmake(template)
    response.setHeader('Content-Type', 'application/pdf')
    response.send(data.buffer())
  } catch (error) {
    logger('error', ['api', 'documents', 'generate', error])
    response.status(500)
    response.send(error)
  }
}
