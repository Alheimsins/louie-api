const render = require('es6-template-render')

module.exports = payload => {
  const { template, data } = payload
  const merged = render(JSON.stringify(template), data)
  return JSON.parse(merged)
}
