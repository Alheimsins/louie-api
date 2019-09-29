const getData = require('../lib/get-tjommi-data')
const logger = require('../lib/logger')

module.exports = async (request, response) => {
  logger('info', ['api', 'get-students', 'start'])
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
