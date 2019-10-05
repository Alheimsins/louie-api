const getData = require('../lib/get-tjommi-data')
const logger = require('../lib/logger')
const documents = require('../test/data/documents-dummy.json')
const validateAuth = require('../lib/auth')

const getUser = async (request, response) => {
  const { username } = request.query
  logger('info', ['api', 'get-student', 'username', username, 'start'])
  logger('info', ['api', 'get-students', 'user', request.user.name])
  try {
    const students = await getData({ username, type: 'student' })
    if (students.length !== 1) {
      logger('info', ['api', 'get-student', 'username', username, `${students.length === 0 ? 'not found' : 'too many found'}`])
      return response.json({})
    }
    logger('info', ['api', 'get-student', 'username', username, 'found'])
    response.json({ ...students[0], documents })
  } catch (error) {
    logger('error', ['api', 'get-student', error])
    response.status(500)
    response.send(error)
  }
}

module.exports = validateAuth(getUser)
