
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('category').del();
  await knex('category').insert([
    {
      id: 1,
      category_name: 'Hobbies',
    },
    {
      id: 2,
      category_name: 'Furniture',
    },
    {
      id: 3,
      category_name: 'Arts',
    },
    {
      id: 4,
      category_name: 'Electronics',
    },
    {
      id: 5,
      category_name: 'Musical Instrument',
    },
    {
      id: 6,
      category_name: 'Pet Supplies',
    },
    {
      id: 7,
      category_name: 'Vehicle',
    },
  ]);
};