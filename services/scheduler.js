const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const { sendBatch, updateStatus } = require('./emailService');
const { loadState, saveState } = require('./stateManager');

const jsonPath = path.join(__dirname, '../data/contacts.json');

// ✅ Store cron task
const task = cron.schedule(`*/${process.env.INTERVAL_MINUTES} * * * *`, async () => {

  const state = loadState();

  if (state.dailySent >= Number(process.env.DAILY_LIMIT)) {
    console.log("🛑 Daily limit reached");
    task.stop();   // Optional: stop when daily limit reached
    return;
  }

  const contacts = JSON.parse(fs.readFileSync(jsonPath));
  const pending = contacts.filter(c => c.status === 'pending');

  // ✅ STOP CRON WHEN NO PENDING EMAILS
  if (pending.length === 0) {
    console.log("✅ No pending emails. Stopping cron job...");
    task.stop();   // 🛑 Stop scheduler
    return;
  }

  const batch = pending.slice(0, Number(process.env.BATCH_SIZE));

  try {
    await sendBatch(batch);
    updateStatus(batch, 'sent');

    state.dailySent += batch.length;
    saveState(state);

    console.log(`🚀 Sent ${batch.length} emails`);

  } catch (err) {
    console.log("❌ Send failed", err.message);
    updateStatus(batch, 'failed');
  }

});
