module.exports = async (request, response) => {
  const mongo = require('../lib/mongo')
  const logger = require('../lib/logger')
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  logger('info', ['api', 'get-students', 'start'])
  try {
    const students = await collection.find({ type: 'student' }).toArray()
    logger('info', ['api', 'get-students', 'students', students.length, 'success'])
    response.json(students)
  } catch (error) {
    logger('error', ['api', 'get-students', error])
    response.status(500)
    response.send(error)
  }
}
