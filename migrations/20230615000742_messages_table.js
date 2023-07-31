exports.up = function (knex) {
    return knex.schema.createTable('messages', (table) => {
      table.increments('id').primary();
      table
        .integer('product_id')
        .unsigned()
        .references('product.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('communicator_user_id')
        .unsigned()
        .references('user.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('receiver_user_id')
        .unsigned()
        .references('user.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.text('text_message').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('messages');
  };
  