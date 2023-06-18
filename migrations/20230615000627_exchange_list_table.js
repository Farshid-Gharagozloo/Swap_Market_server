
exports.up = function (knex) {
    return knex.schema.createTable('exchange_list', (table) => {
      table
        .integer('exchange_item_id')
        .unsigned()
        .references('exchange_items.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('product_id')
        .unsigned()
        .references('product.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('exchange_list');
  };
  