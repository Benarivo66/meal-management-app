// import knex from 'knex';
// import objection from 'objection';

// const connection = {
//   host: 'localhost',
//   user: 'Mac',
//   password: 'password',
//   database: 'mealdb'
// };

// const knexInstance = knex({
//   client: 'pg',
//   connection
// });

// objection.Model.knex(knexInstance);

// class Brand extends objection.Model {
//   static get tableName() {
//     return 'brand';
//   }

//   static get jsonSchema() {
//     return {
//       type: 'object',
//       required: ['username', 'password'],

//       properties: {
//         id: { type: 'integer' },
//         name: { type: 'string', minLength: 1, maxLength: 255 },
//         description: { type: 'string', minLength: 1, maxLength: 255 },
//         price: { type: 'integer', minLength: 1, maxLength: 255 },
//         category: { type: 'string', minLength: 1, maxLength: 255 }
//       }
//     };
//   }
// }

// // Migrate the database
// knexInstance.migrate
//   .latest()
//   .then(() => console.log('Migration complete'))
//   .catch(err => console.error(err));

// // Insert a new user
// const brand = {
//   name: 'afang',
//   description: 'vegetable',
//   price: 200,
//   category: 'soup'
// };

// Brand.query()
//   .insert(brand)
//   .then(() => console.log('User added'))
//   .catch(err => console.error(err));
