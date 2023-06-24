
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('product').del();
    await knex('product').insert([
      {
        id: 1,
        user_id: 1,
        category_id: 1,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "yes",
        price: 22,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 2,
        user_id: 1,
        category_id: 1,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "yes",
        price: 42,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 3,
        user_id: 1,
        category_id: 3,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "yes",
        price: 77,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 4,
        user_id: 2,
        category_id: 2,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "no",
        price: 20,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 5,
        user_id: 2,
        category_id: 2,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "no",
        price: 25,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 6,
        user_id: 3,
        category_id: 2,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "no",
        price: 30,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 7,
        user_id: 3,
        category_id: 3,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "yes",
        price: 45,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 8,
        user_id: 4,
        category_id: 3,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "yes",
        price: 86,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 9,
        user_id: 5,
        category_id: 3,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "no",
        price: 105,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
      {
        id: 10,
        user_id: 5,
        category_id: 3,
        product_name: "item_1",
        description: "long description about item .......",
        interchangeable: "yes",
        price: 20,
        image_url: "http://localhost:8080/images/1687624337159.jpg",
      },
    ]);
  };