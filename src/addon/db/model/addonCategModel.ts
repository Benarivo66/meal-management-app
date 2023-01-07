const { Model } = require('objection');

export class AddonCategoryModel extends Model {
  static get tableName() {
    return 'addonCategory';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
      }
    };
  }
}


