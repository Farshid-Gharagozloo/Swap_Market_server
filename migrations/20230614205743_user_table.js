
exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {
      table.increments('id').primary();
      table.string('user_name').notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('address').notNullable();
      table.string('postal_code').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.integer('contact_number').unsigned().notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('user');
  };
  