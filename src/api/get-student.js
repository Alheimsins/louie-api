const mongo = require('../lib/mongo')
const logger = require('../lib/logger')
const documents = require('../../test/data/documents-dummy.json')

module.exports = async (request, response) => {
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  const { username } = request.query
  logger('info', ['api', 'get-student', 'username', username, 'start'])
  const student = await collection.findOne({ username: username, type: 'student' })
  logger('info', ['api', 'get-student', 'username', username, 'get', student ? student.username : 'none', 'students'])
  response.json({ ...student, documents })
}
