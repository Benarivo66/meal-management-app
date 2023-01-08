import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('addonCategory', (table) => {
            table.increments();
            table.string('name').notNullable();
        });
};


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTableIfExists('addonCategory');
}

