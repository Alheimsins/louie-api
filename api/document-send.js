const mongo = require('../lib/mongo')
const validateAuth = require('../lib/auth')
// const logger = require('../lib/logger')

const sendDocument = async (request, response) => {
  const { body: payload } = request
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_LOGS_COLLECTION)
  const result = await collection.insertOne(payload)
  response.send({ success: true, result })
}

module.exports = validateAuth(sendDocument)
