const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function loadEmails(filePath) {
  const records = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', row => {
      if (row.sent !== 'true') {
        records.push(row);
      }
    });

  return records;
}

function markSent(batch) {
  // read all rows
  const allRows = fs.readFileSync(filePath, 'utf8').split('\n').map(r => r.split(','));

  // update matched rows to `sent=true`
  // simple implementation — rewrite CSV replacing sent to true
  batch.forEach(b => {
    for (let i = 0; i < allRows.length; i++) {
      if (allRows[i][0] === b.email) { // assuming first col is email
        allRows[i][allRows[i].length - 1] = 'true'; // last col = sent
      }
    }
  });

  fs.writeFileSync(filePath, allRows.map(r => r.join(',')).join('\n'));
}

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

module.exports = { loadEmailsFromCSV, loadEmails, markSent };
