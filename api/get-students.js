const getData = require('../lib/get-tjommi-data')
const validateAuth = require('../lib/auth')
const logger = require('../lib/logger')

const getStudents = async (request, response, user) => {
  logger('info', ['api', 'get-students', 'start'])
  logger('info', ['api', 'get-students', 'user', request.user.name])
  try {
    const students = await getData({ type: 'student' })
    logger('info', ['api', 'get-students', 'students', students.length, 'success'])
    response.json(students)
  } catch (error) {
    logger('error', ['api', 'get-students', error])
    response.status(500)
    response.send(error)
  }
}

module.exports = validateAuth(getStudents)
