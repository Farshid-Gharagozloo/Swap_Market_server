
exports.seed = async function (knex) {
    // Deletes ALL existing entries 1 2 3 7 8 10
    await knex('exchange_list').del();
    await knex('exchange_list').insert([
      {
        exchange_item_id: 1,
        product_id: 1,
      },
      {
        exchange_item_id: 3,
        product_id: 1,
      },
      {
        exchange_item_id: 1,
        product_id: 2,
      },
      {
        exchange_item_id: 7,
        product_id: 2,
      },
      {
        exchange_item_id: 5,
        product_id: 2,
      },
      {
        exchange_item_id: 6,
        product_id: 3,
      },
      {
        exchange_item_id: 8,
        product_id: 7,
      },
      {
        exchange_item_id: 2,
        product_id: 7,
      },
      {
        exchange_item_id: 10,
        product_id: 7,
      },
      {
        exchange_item_id: 1,
        product_id: 8,
      },
      {
        exchange_item_id: 5,
        product_id: 8,
      },
      {
        exchange_item_id: 7,
        product_id: 8,
      },
      {
        exchange_item_id: 6,
        product_id: 10,
      },
      {
        exchange_item_id: 10,
        product_id: 10,
      },
      {
        exchange_item_id: 4,
        product_id: 10,
      },
      {
        exchange_item_id: 6,
        product_id: 11,
      },
      {
        exchange_item_id: 6,
        product_id: 15,
      },
      {
        exchange_item_id: 8,
        product_id: 15,
      },
      {
        exchange_item_id: 10,
        product_id: 15,
      },
      {
        exchange_item_id: 3,
        product_id: 16,
      },
      {
        exchange_item_id: 9,
        product_id: 16,
      },
      {
        exchange_item_id: 9,
        product_id: 18,
      },
      {
        exchange_item_id: 8,
        product_id: 18,
      },
      {
        exchange_item_id: 2,
        product_id: 18,
      },
      {
        exchange_item_id: 8,
        product_id: 20,
      },
      {
        exchange_item_id: 10,
        product_id: 20,
      },
      {
        exchange_item_id: 9,
        product_id: 12,
      },{
        exchange_item_id: 6,
        product_id: 12,
      },
      {
        exchange_item_id: 8,
        product_id: 12,
      },
    ]);
  };