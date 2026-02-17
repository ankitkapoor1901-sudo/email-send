const sgMail = require("../config/sendgrid");
const fs = require("fs");
const path = require("path");
const templates = require("../templates");

const jsonPath = path.join(__dirname, "../data/contacts.json");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendBatch(batch) {
  for (const user of batch) {
    const messages = {
      to: user.email,
      from: {
        email: process.env.FROM_EMAIL,
        name: "Ankit Kapoor | NKA GLOBAL EXPORTS",
      },
      subject: "Verlässliche Reis- & Gewürzlieferungen aus Indien",
      html: templates[user.template](user),
      replyTo: process.env.REPLY_TO_EMAIL,
    };
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();

    await sgMail.send(messages);
    const randomDelay = Math.floor(Math.random() * 20000) + 5000;
    console.log(`sent DateTime:${dateTimeString}`);
    console.log(`LastObject: ${user.email}`);
    console.log(`Waiting ${randomDelay / 1000}s before next send`);
    await sleep(randomDelay);
  }
}

function updateStatus(batch, status) {
  const contacts = JSON.parse(fs.readFileSync(jsonPath));

  batch.forEach((user) => {
    const index = contacts.findIndex((c) => c.id === user.id);
    if (index !== -1) {
      contacts[index].status = status;
      contacts[index].sent_at = new Date().toISOString();
    }
  });

  fs.writeFileSync(jsonPath, JSON.stringify(contacts, null, 2));
}

module.exports = { sendBatch, updateStatus };
