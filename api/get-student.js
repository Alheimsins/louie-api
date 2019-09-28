const mongo = require('../lib/mongo')
const logger = require('../lib/logger')
const documents = require('../test/data/documents-dummy.json')

module.exports = async (request, response) => {
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  const { id } = request.query
  logger('info', ['api', 'get-student', 'id', id, 'start'])
  const students = await collection.find({ uid: id, type: 'student' }).toArray()
  logger('info', ['api', 'get-student', 'id', id, 'get', students.length, 'students'])
  const results = students.map(student => Object.assign({}, student, { documents: documents }))
  response.json(results[0])
}
