module.exports = async (request, response) => {
  const imageUrl = 'https://robohash.org/' + Math.random() + '?set=2'
  const student = require('../test/data/student-dummy.json')
  response.json({ ...student, imageUrl })
}
