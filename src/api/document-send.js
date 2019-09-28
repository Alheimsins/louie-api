const mongo = require('../lib/mongo')
// const logger = require('../lib/logger')

module.exports = async (request, response) => {
  const payload = await request.body
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_LOGS_COLLECTION)
  const result = await collection.insertOne(payload)
  response.send({ success: true, result: result })
}
