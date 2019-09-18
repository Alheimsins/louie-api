module.exports = async (request, response) => {
  const student = require('../test/data/student-dummy.json')
  const result = student.find(({ uid }) => uid === request.query.id) || {}
  response.json(result)
}
