const mongo = require('../lib/mongo')
const logger = require('../lib/logger')
const documents = require('../test/data/documents-dummy.json')

module.exports = async (request, response) => {
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  const { username } = request.query
  logger('info', ['api', 'get-student', 'username', username, 'start'])
  try {
    const student = await collection.findOne({ username, type: 'student' })
    if (!student) {
      logger('info', ['api', 'get-student', 'username', username, 'not found'])
      return response.json({})
    }
    logger('info', ['api', 'get-student', 'username', username, 'found'])
    response.json({ ...student, documents })
  } catch (error) {
    logger('error', ['api', 'get-student', error])
    response.status(500)
    response.send(error)
  }
}
