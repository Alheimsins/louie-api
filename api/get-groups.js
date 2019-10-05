const groups = require('../test/data/groups-dummy.json')
const validateAuth = require('../lib/auth')

const getGroups = async (request, response) => {
  response.json(groups)
}

module.exports = validateAuth(getGroups)
