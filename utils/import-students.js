(async () => {
  require('dotenv').config()
  const mongo = require('../lib/mongo')
  const logger = require('../lib/logger')
  const students = require('../test/data/students-dummy.json')
  const db = await mongo()
  const collection = db.collection(process.env.MONGODB_BUDDY_COLLECTION)
  logger('info', ['utils', 'import-students', 'got', students.length, 'students'])
  try {
    await Promise.all(students.map(student => collection.insertOne(student)))
    logger('info', ['utils', 'import-students', 'finished'])
  } catch (error) {
    logger('error', ['utils', 'import-students', error])
  }
  process.exit(0)
})()
