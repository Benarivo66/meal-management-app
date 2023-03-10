import { Model } from 'objection';

export class AddonModel extends Model {
  static get tableName() {
    return 'addons';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          nullable: true,
        },
        price: { type: 'integer' },
        category: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          nullable: true,
        },
        brandId: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          nullable: true,
        },
      },
    };
  }
}
