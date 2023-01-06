const { Model } = require('objection');

class Brand extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'description', 'price', 'category'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'integer' },
        category: { type: 'string', minLength: 1, maxLength: 255 },
      }
    };
  }
}

module.exports = Brand;
