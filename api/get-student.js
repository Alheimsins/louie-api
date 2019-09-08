module.exports = async (request, response) => {
  const student = require('../test/data/student-dummy.json')
  response.json(student)
}
