import knex from 'knex';
import { Model } from 'objection';

const knexfile = require('./knexfile');

function setupDb() {
  const db = knex(knexfile.development);

  // plug db config into objection
  Model.knex(db);
  console.log('db successfully set up')
}

export default setupDb;
