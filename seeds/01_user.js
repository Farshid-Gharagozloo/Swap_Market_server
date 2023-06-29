const bcrypt = require('bcrypt');

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
      password: bcrypt.hashSync("wRf9@KlP", 10), 
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
      password: bcrypt.hashSync("asdasd", 10),
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
      password: bcrypt.hashSync("7&fHg#9Lm", 10),
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
      password: bcrypt.hashSync("S3cureP@ss", 10),
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
      password: bcrypt.hashSync("Passw0rd", 10),
      contact_number: 7892123
    },
    {
      id: 6,
      user_name: "jsmith123",
      first_name: "John",
      last_name: "Smith",
      address: "123 Fake Street",
      postal_code: "12345",
      email: "john.smith@example.com",
      password: bcrypt.hashSync("987654321", 10),
      contact_number: 551234567
    },
    {
      id: 7,
      user_name: "lisa88",
      first_name: "Lisa",
      last_name: "Johnson",
      address: "456 Mock Avenue",
      postal_code: "67890",
      email: "lisa.johnson@example.com",
      password: bcrypt.hashSync("123456789", 10),
      contact_number: 559876543
    },
  ]);
};