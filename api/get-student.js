module.exports = async (request, response) => {
  const mongo = require('../lib/mongo')
  const logger = require('../lib/logger')
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_BUDDY_COLLECTION)
  const { id } = request.query
  logger('info', ['api', 'get-student', 'id', id, 'start'])
  const students = await collection.find({ uid: id }).toArray()
  logger('info', ['api', 'get-student', 'id', id, 'get', students.length, 'students'])
  response.json(students)
}
