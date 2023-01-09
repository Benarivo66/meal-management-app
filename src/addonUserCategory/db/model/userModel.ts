import { Model } from 'objection';

export class UserModel extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        role: { type: 'string', default: 'user' },
      },
    };
  }
}
