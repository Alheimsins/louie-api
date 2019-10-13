const mail = require('@sendgrid/mail')
const logger = require('./logger')

module.exports = async data => {
  mail.setApiKey(process.env.SENDGRID_SECRET)
  const msg = {
    to: data.to,
    from: data.from,
    subject: data.subject,
    text: data.text
  }

  if (data.html) {
    msg.html = data.html
  }

  if (data.cc) {
    msg.cc = data.cc
  }

  if (data.bcc) {
    msg.bcc = data.bcc
  }

  if (data.replyTo) {
    msg.replyTo = data.replyTo
  }

  if (data.attachments) {
    msg.attachments = data.attachments
  }

  logger('info', ['lib', 'send-mail', data.to, 'start'])
  try {
    const response = await mail.send(msg)
    logger('info', ['lib', 'send-mail', data.to, 'success'])
    return response
  } catch (error) {
    logger('error', ['lib', 'send-mail', data.to, error])
    return false
  }
}
