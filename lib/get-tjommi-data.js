const mongo = require('./mongo')
const logger = require('./logger')

module.exports = async query => {
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_TJOMMI_COLLECTION)
  logger('info', ['lib', 'get-tjommi-data', 'query', JSON.stringify(query), 'start'])
  const data = await collection.find(query).toArray()
  logger('info', ['lib', 'get-tjommi-data', 'data', data.length, 'success'])
  return data
}
