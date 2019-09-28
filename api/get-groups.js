const groups = require('../test/data/groups-dummy.json')

module.exports = async (request, response) => {
  response.json(groups)
}
