const mongo = require('../lib/mongo')
const validateAuth = require('../lib/auth')
const generateMail = require('../lib/generate-mail')
const sendMail = require('../lib/send-mail')
// const logger = require('../lib/logger')

const sendDocument = async (request, response) => {
  const { body: payload } = request
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_LOGS_COLLECTION)
  const result = await collection.insertOne(payload)
  const email = generateMail({ ...payload, email: request.user.email })
  await sendMail(email)
  response.send({ success: true, result })
}

module.exports = validateAuth(sendDocument)
