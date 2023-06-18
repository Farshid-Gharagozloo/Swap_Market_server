
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
  ]);
};