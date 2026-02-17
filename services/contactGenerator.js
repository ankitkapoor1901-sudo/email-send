const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvPath = path.join(__dirname, '../data/contacts.csv');
const jsonPath = path.join(__dirname, '../data/contacts.json');


function getLanguageFromCountry(countryCode) {
  const languageMap = {
    FR: 'fr',
    ES: 'es',
    DE: 'de',
    IT: 'it',
    CN: 'zh',
    JP: 'ja',
    IN: 'en',
    US: 'en',
    GB: 'en',
    AE: 'ar'
  };

  return languageMap[countryCode] || 'en';
}

function generateContacts() {
  const results = [];
  const existingEmails = new Set();

  if (fs.existsSync(jsonPath)) {
    const existing = JSON.parse(fs.readFileSync(jsonPath));
    existing.forEach(c => existingEmails.add(c.email));
    results.push(...existing);
  }

  let idCounter = results.length + 1;

  fs.createReadStream(csvPath)
    .pipe(csv())
    .on('data', row => {
      if (!existingEmails.has(row.email)) {
        results.push({
          id: idCounter++,
          email: row.email,
          template: 'buyerIntro',
          timezone: 'UTC',
          language: 'en',
          status: 'pending',
          created_at: new Date().toISOString()
        });
      }
    })
    .on('end', () => {
      fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));
      console.log('✅ Contacts synced');
    });
}

module.exports = { generateContacts };
