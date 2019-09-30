const pdfmake = require('@alheimsins/pdf-make')
const generateTemplate = require('../lib/generate-template')
const logger = require('../lib/logger')

module.exports = async (request, response) => {
  const { body } = request
  try {
    const template = generateTemplate(body)
    const base64File = (await pdfmake(template)).toString('base64')
    response.send(`data:application/pdf;base64,${base64File}`)
  } catch (error) {
    logger('error', ['api', 'documents', 'generate-base64', error])
    response.status(500)
    response.send(error)
  }
}
