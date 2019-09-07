module.exports = async (request, response) => {
  const students = require('../test/data/students-dummy.json')
  response.json(students)
}
