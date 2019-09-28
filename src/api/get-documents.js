const documents = require('../../test/data/documents-dummy.json')

module.exports = async (request, response) => {
  response.json(documents)
}
