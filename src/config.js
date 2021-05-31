'use strict';

module.exports = {
  APP_NAME:        'microservices-event-bus',
  PORT:            process.env.PORT     || 3000,
  NODE_ENV:        process.env.NODE_ENV || 'development',
  LOG_LEVEL:       'info',
  CACHE_TTL:       3600,
  MAX_RETRIES:     3,
  REQUEST_TIMEOUT: 5000,
};
