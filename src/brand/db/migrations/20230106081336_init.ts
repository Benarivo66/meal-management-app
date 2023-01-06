import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('brands', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.string('description').notNullable();
            table.integer('price').notNullable();
            table.string('category').notNullable();
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTableIfExists('brands');
}

