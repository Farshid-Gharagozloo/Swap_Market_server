exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('messages').del();
    await knex('messages').insert([
      {
        id: 1,
        product_id: 2,
        communicator_user_id: 3,
        receiver_user_id: 1,
        text_message: "salam khoobi??",
      },
      {
        id: 2,
        product_id: 3,
        communicator_user_id: 2,
        receiver_user_id: 1,
        text_message: "Hi feloony??",
      },
      {
        id: 3,
        product_id: 5,
        communicator_user_id: 3,
        receiver_user_id: 2,
        text_message: "bonjoogh???",
      },
      {
        id: 4,
        product_id: 8,
        communicator_user_id: 1,
        receiver_user_id: 4,
        text_message: "barefffff??",
      },
      {
        id: 5,
        product_id: 12,
        communicator_user_id: 3,
        receiver_user_id: 6,
        text_message: "saghooool???",
      },
    ]);
  };