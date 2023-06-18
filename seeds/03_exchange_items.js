
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('exchange_items').del();
    await knex('exchange_items').insert([
      {
        id: 1,
        item_name: 'bored game',
      },
      {
        id: 2,
        item_name: 'dinning table',
      },
      {
        id: 3,
        item_name: 'cabinet',
      },
      {
        id: 4,
        item_name: 'desk',
      },
      {
        id: 5,
        item_name: 'chair',
      },
      {
        id: 6,
        item_name: 'ps5',
      },
      {
        id: 7,
        item_name: 'bag',
      },
      {
        id: 8,
        item_name: 'camera',
      },
      {
        id: 9,
        item_name: 'phone',
      },
      {
        id: 10,
        item_name: 'printer',
      },
    ]);
  };