const MongoClient = require('mongodb').MongoClient
const { URL } = require('url')
const logger = require('./logger')
const uri = process.env.MONGODB_CONNECTION

let cachedDb = null

module.exports = async () => {
  if (cachedDb) {
    logger('info', ['mongo', 'client connected', 'quick return'])
    return cachedDb
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  const db = await client.db(new URL(uri).pathname.substr(1))

  cachedDb = db
  logger('info', ['mongo', 'new client connected'])
  return db
}
