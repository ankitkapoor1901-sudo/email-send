const sgMail = require('./config/sendgrid');

const BATCH_SIZE = 500;

async function sendMail({
  template,
  personalizations,
  from,
  replyTo,
  subject,
  dynamicData
}) {
  const html = template(dynamicData);

  for (let i = 0; i < personalizations.length; i += BATCH_SIZE) {
    const batch = personalizations.slice(i, i + BATCH_SIZE);

    const msg = {
      from,
      subject,
      html,
      personalizations: batch,
    };

    if (replyTo) {
      msg.reply_to = { email: replyTo };
    }

    try {
      await sgMail.send(msg);
      const currentDate = new Date();
      const dateTimeString = currentDate.toLocaleString();
      console.log(`Batch ${i / BATCH_SIZE + 1} sent DateTime:${dateTimeString} LastObject:${JSON.stringify(batch.at(-1))}`);
    } catch (err) {
      console.error('SendGrid Error:', err.response?.body || err);
    }
  }
}

module.exports = sendMail;
