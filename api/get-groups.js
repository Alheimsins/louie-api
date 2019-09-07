module.exports = async (request, response) => {
  const groups = require('../test/data/groups-dummy.json')
  response.json(groups)
}
