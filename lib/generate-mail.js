const nanoid = require('nanoid')
const pdfmake = require('@alheimsins/pdf-make')
const generateTemplate = require('./generate-template')

module.exports = async data => {
  const template = generateTemplate(data)
  const base64File = (await pdfmake(template)).toString('base64')
  return {
    to: data.email,
    from: 'louie@gasodden.net',
    subject: 'Kopi av varselbrev',
    text: `Her er en kopi av varselbrevet til ${data.name}`,
    attachements: [
      {
        content: base64File,
        filename: 'varselbrev.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
        content_id: nanoid()
      }
    ]
  }
}
