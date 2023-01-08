import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('addons', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.string('description');
            table.integer('price').notNullable();
            table.string('category');
            table.string('brandId').notNullable();
        });
};


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTableIfExists('addons');
};

