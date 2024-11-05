const knex = require('knex');
const config = require('./knexfile').development;

// Initialize Knex with configuration and export it
module.exports = knex(config);
