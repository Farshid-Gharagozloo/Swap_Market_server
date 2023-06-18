
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {
      id: 1,
      user_name: "silver_dragon123",
      first_name: "Emma",
      last_name: "Walker",
      address: "47 Maple Street",
      postal_code: "12345",
      email: "emma.walker@example.com",
      password: "wRf9@KlP",
      contact_number: 1234567
    },
    {
      id: 2,
      user_name: "curious_mind77",
      first_name: "Alexander",
      last_name: "Anderson",
      address: "21 Oak Avenue",
      postal_code: "98765",
      email: "alexander.anderson@example.com",
      password: "P@ssw0rd123",
      contact_number: 9876543
    },
    {
      id: 3,
      user_name: "sunny_breeze25",
      first_name: "Olivia",
      last_name: "Parker",
      address: "9 Elm Street",
      postal_code: "54321",
      email: "olivia.parker@example.com",
      password: "7&fHg#9Lm",
      contact_number: 3216789
    },
    {
      id: 4,
      user_name: "radiant_star99",
      first_name: "Ethan",
      last_name: "Hughes",
      address: "62 Pine Avenue",
      postal_code: "23456",
      email: "ethan.hughes@example.com",
      password: "S3cureP@ss",
      contact_number: 4567890
    },
    {
      id: 5,
      user_name: "dreamy_wanderer42",
      first_name: "Sophia",
      last_name: "Carter",
      address: "14 Cedar Road",
      postal_code: "87654",
      email: "sophia.carter@example.com",
      password: "Passw0rd",
      contact_number: 7892123
    },
  ]);
};