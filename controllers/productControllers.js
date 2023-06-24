const knex = require('knex')(require('../knexfile'));


function parseProductItem (info, exItems){
    let exchange_items = [];
    if (exItems.length){
        exchange_items = exItems.map((item) =>{
            return item.item_name;
        });
    }    
    return {
        name: info[0].product_name,
        user_name: info[0].user_name,
        category: info[0].category_name,
        description: info[0].description,
        price: info[0].price,
        address: info[0].address,
        postal_code: info[0].postal_code,
        email: info[0].email,
        phone: info[0].contact_number, 
        exchangeable_items: exchange_items
    };
}

const getProductItem = async (req, res) =>{

  try {
    const productsInfo = await knex.raw('SELECT product_name, price, category_name, description, '+
        'user_name, address, postal_code, email, contact_number FROM product '+
        'JOIN category ON product.category_id=category.id '+
        `JOIN user ON product.user_id=user.id WHERE product.id = ${req.params.id}`);
    const exchangeItems = await knex.raw('SELECT interchangeable, item_name FROM product '+
        'JOIN exchange_list ON product.id=exchange_list.product_id '+
        `JOIN exchange_items ON exchange_items.id=exchange_list.exchange_item_id WHERE product.id= ${req.params.id}`);
    
    res.status(200).json(parseProductItem(productsInfo[0], exchangeItems[0]));
  } catch (error) {
    return res.status(404).send('No product is found!');
  }
}


const editProductItem = async (req, res) => {
  try {
    const { id, user_id, exchangeable_items, category, description, price, name: product_name } = req.body;

    const productExist = await knex('product').where({ id });
    if (productExist.length === 0) {
      return res.status(400).send('Product ID does not exist');
    }

    const userExist = await knex('user').where({ id: user_id });
    if (userExist.length === 0) {
      return res.status(400).send('User does not exist');
    }

    const grabCategoryId = await knex.raw(`SELECT id FROM category WHERE category_name = '${category}';`);
    const category_id = grabCategoryId[0][0].id;

    let exchangeList = [];

    const updateProduct = await knex('product').where({ id }).update({ description, product_name, price, category_id });

    for (let i = 0; i < exchangeable_items.length; i++) {
      const exNewItemUpdate = await knex.raw(`SELECT id FROM exchange_items WHERE item_name = '${exchangeable_items[i]}';`);
      if (!exNewItemUpdate[0].length) {
        const exNewItemAdd = await knex.raw(`INSERT INTO exchange_items (item_name) VALUES ('${exchangeable_items[i]}');`);
        const exNewItemId = await knex.raw(`SELECT id FROM exchange_items WHERE item_name = '${exchangeable_items[i]}';`);
        exchangeList.push(exNewItemId[0][0].id);
      } else {
        exchangeList.push(exNewItemUpdate[0][0].id);
      }
   
    }

    const deleteLastExchange = await knex('exchange_list').where({ product_id: id }).del();

    for (let i=0; i < exchangeList.length; i++){
      const recoverExchangeList = await knex.raw(`INSERT INTO exchange_list (exchange_item_id, product_id) VALUES ('${exchangeList[i]}','${id}');`);
    }

    return res.send('Successful');
  } catch (error) {
    return res.status(500).send('Error: No product found');
  }

};

const addProductItem = async (req, res) => {
  try {
    const { name: product_name, user_id, interchangeable, exchangeable_items: exItems, category, description, price } = req.body;


    const exchangeable_items = JSON.parse(exItems);
    // console.log(req.body);
    const userExist = await knex('user').where({ id: user_id });
    if (userExist.length === 0) {
      return res.status(400).send('User does not exist');
    }

    const grabCategoryId = await knex.raw(`SELECT id FROM category WHERE category_name = '${category}';`);
    const category_id = grabCategoryId[0][0].id;

    const addProduct = await knex('product').insert({ user_id, description, product_name, interchangeable, price, category_id });

    if (interchangeable === 'no'){
      return res.send('Successful');
    }

    const lastItemId = await knex.raw('SELECT id FROM product ORDER BY id DESC LIMIT 1;');
    console.log(exchangeable_items);
    const id = lastItemId[0][0].id;

    let exchangeList = [];
    for (let i = 0; i < exchangeable_items.length; i++) {
      const exNewItemUpdate = await knex.raw(`SELECT id FROM exchange_items WHERE item_name = '${exchangeable_items[i]}';`);
      if (!exNewItemUpdate[0].length) {
        const exNewItemAdd = await knex.raw(`INSERT INTO exchange_items (item_name) VALUES ('${exchangeable_items[i]}');`);
        const exNewItemId = await knex.raw(`SELECT id FROM exchange_items WHERE item_name = '${exchangeable_items[i]}';`);
        exchangeList.push(exNewItemId[0][0].id);
      } else {
        exchangeList.push(exNewItemUpdate[0][0].id);
      }
    }

    // console.log(exchangeList);

    for (let i=0; i < exchangeList.length; i++){
      const addExchangeList = await knex.raw(`INSERT INTO exchange_list (exchange_item_id, product_id) VALUES ('${exchangeList[i]}','${id}');`);
    }
    return res.send('Successful');

  } catch (error) {
    return res.status(500).send('Error: No product found');
  }

};


const getCategoryList = async (_req, res) => {
  try {
    const categories = await knex.raw('SELECT category_name FROM category;');
    res.status(200).send(categories[0]);
  } catch {
    return res.status(404).send('No category list!');
  }
}



module.exports = {
    getProductItem,
    editProductItem,
    addProductItem,
    getCategoryList
}
