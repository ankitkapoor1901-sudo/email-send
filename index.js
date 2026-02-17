require('dotenv').config();
const { generateContacts } = require('./services/contactGenerator');

generateContacts(); // auto sync CSV → JSON

require('./services/scheduler');

console.log("📨 Production email system started");
