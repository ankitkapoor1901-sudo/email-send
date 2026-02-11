require('dotenv').config();
const path = require('path');

const sendMail = require('./genericMail');
const loadEmailsFromCSV = require('./csvLoader');
const templates = require('./templates');

// Example: node index.js supplierIntro
const campaignName = process.argv[2];

if (!campaignName) {
  console.error('❌ Campaign name required');
  process.exit(1);
}

// Load campaign config
const campaign = require(
  path.join(__dirname, 'campaigns', `${campaignName}.json`)
);

// Resolve template
const templateFn = templates[campaign.template];

if (!templateFn) {
  console.error(`❌ Template "${campaign.template}" not found`);
  process.exit(1);
}

// Load recipients
const personalizations = loadEmailsFromCSV(campaign.csvPath);

// Send mail
sendMail({
  template: templateFn,
  personalizations,
  from: campaign.from,
  replyTo: campaign.replyTo,
  subject: campaign.subject,
  dynamicData: campaign.dynamicData || {}
});
