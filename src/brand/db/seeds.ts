import { Knex } from "knex";

exports.seed = async function (knex: Knex) {
    // truncate all existing tables
    await knex.raw('TRUNCATE TABLE "brands" CASCADE');
  
    // insert seed data
    await knex('channel').insert([
      {
        id: 1,
        name: 'fried egg',
        description: 'fried egg with bread',
        price: 10,
        category: 'breakfast',
      },
      {
        id: 2,
        name: 'Beans',
        description: 'Plantain and beans',
        price: 50,
        category: 'lunch',
      },
    ]);
  };
  