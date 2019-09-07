module.exports = async (request, response) => {
  const documents = require('../test/data/documents-dummy.json')
  response.json(documents)
}
