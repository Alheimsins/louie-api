const documents = require('../test/data/documents-dummy.json')
const validateAuth = require('../lib/auth')

const getDocuments = async (request, response) => {
  response.json(documents)
}

module.exports = validateAuth(getDocuments)
