'use strict';

const config = require('./config');

function start() {
  console.log(`Starting ${config.APP_NAME} on port ${config.PORT}`);
}

start();
