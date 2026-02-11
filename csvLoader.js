const fs = require('fs');

function loadEmailsFromCSV(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');

  const emails = data
    .split('\n')
    .slice(1) // remove header
    .map(e => e.trim().toLowerCase())
    .filter(Boolean);

  // remove duplicates
  const uniqueEmails = [...new Set(emails)];

  return uniqueEmails.map(email => ({
    to: [{ email }]
  }));
}

module.exports = loadEmailsFromCSV;
