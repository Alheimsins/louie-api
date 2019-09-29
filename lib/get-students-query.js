const mongo = require('./mongo')
const logger = require('./logger')

module.exports = async (request, response) => {
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  logger('info', ['lib', 'get-students-query', 'start'])
  const students = await collection.find({ type: 'student' }).toArray()
  logger('info', ['lib', 'get-students-query', 'students', students.length, 'success'])
  return students
}
