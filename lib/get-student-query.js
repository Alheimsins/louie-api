const mongo = require('./mongo')
const logger = require('./logger')
const documents = require('../test/data/documents-dummy.json')

module.exports = async query => {
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  logger('info', ['lib', 'get-student-query', 'query', JSON.stringify(query), 'start'])
  const student = await collection.findOne(query)
  if (!student) {
    logger('info', ['lib', 'get-student-query', 'query', JSON.stringify(query), 'not found'])
    return {}
  } else {
    logger('info', ['lib', 'get-student-query', 'query', JSON.stringify(query), 'found'])
    return { ...student, documents }
  }
}
