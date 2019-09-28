const mongo = require('../lib/mongo')
const logger = require('../lib/logger')
const documents = require('../test/data/documents-dummy.json')

module.exports = async (request, response) => {
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  const { id } = request.query
  logger('info', ['api', 'get-student', 'id', id, 'start'])
  const student = await collection.findOne({ uid: id, type: 'student' })
  logger('info', ['api', 'get-student', 'id', id, 'get', student ? student.username : 'none', 'students'])
  response.json({ ...student, documents })
}
