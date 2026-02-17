const fs = require('fs');
const path = require('path');

const statePath = path.join(__dirname, '../data/state.json');

function loadState() {
  if (!fs.existsSync(statePath)) {
    const defaultState = {
      dailySent: 0,
      lastReset: new Date().toDateString()
    };
    fs.writeFileSync(statePath, JSON.stringify(defaultState, null, 2));
    return defaultState;
  }

  const state = JSON.parse(fs.readFileSync(statePath));

  // Reset daily counter at midnight
  if (state.lastReset !== new Date().toDateString()) {
    state.dailySent = 0;
    state.lastReset = new Date().toDateString();
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
  }

  return state;
}

function saveState(state) {
  fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
}

module.exports = { loadState, saveState };
