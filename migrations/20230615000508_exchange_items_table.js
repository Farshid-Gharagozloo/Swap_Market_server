
exports.up = function (knex) {
    return knex.schema.createTable('exchange_items', (table) => {
      table.increments('id').primary();
      table.string('item_name').notNullable();
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('exchange_items');
  };
  