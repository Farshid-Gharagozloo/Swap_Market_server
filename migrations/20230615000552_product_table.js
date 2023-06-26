
exports.up = function (knex) {
    return knex.schema.createTable('product', (table) => {
      table.increments('id').primary();
      table
        .integer('user_id')
        .unsigned()
        .references('user.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('category_id')
        .unsigned()
        .references('category.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('product_name').notNullable();
      table.text('description').notNullable();
      table.string('interchangeable').notNullable();
      table.integer('price').notNullable();
      table.string('image_url');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('product');
  };
  