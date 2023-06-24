const knex = require('knex')(require('../knexfile'));

function parseProductList (listInfo) {
    const productList = listInfo.map((item) => {
      return {
        id: item.id,
        name: item.product_name,
        user_name: item.user_name,
        category: item.category_name,
        price: item.price,
        interchangeable: item.interchangeable,
        address: item.address,
        image_url: item.image_url,
        time: item.updated_at,
      };
    });
  
    return productList;
}

const getProductList = async (_req, res) => {
    try {
      const productListInfo = await knex.raw('SELECT product.id, product_name, user_name, category_name, price, interchangeable, address, ' +
        'product.updated_at, product.image_url FROM product JOIN category ON product.category_id=category.id JOIN user ON product.user_id=user.id' );
      
        // console.log(productListInfo[0]);
  
      res.status(200).json(parseProductList(productListInfo[0]));
    } catch (error) {
      return res.status(404).send('No list!');
    }
};
  
const getListByCategory = async (req, res) => {
    try {
        const {category_name} = req.body;

        const productListInfo = await knex.raw('SELECT product.id, product_name, user_name, category_name, price, interchangeable, address, '+
        'product.updated_at, product.image_url FROM product JOIN category ON product.category_id=category.id '+
        `JOIN user ON product.user_id=user.id WHERE category_name = '${category_name}';`);
        
        res.status(200).json(parseProductList(productListInfo[0]));
    } catch (error) {
        return res.status(404).send('No category list!');
    }
};


const getListByPrice = async (req, res) => {
    try {
        const {highest_price, lowest_price} = req.body;

        const productListInfo = await knex.raw('SELECT product.id, product_name, user_name, category_name, price, interchangeable, address, '+
        'product.updated_at, product.image_url FROM product JOIN category ON product.category_id=category.id '+
        `JOIN user ON product.user_id=user.id WHERE price < '${highest_price}' and price > '${lowest_price}';`);
        
        res.status(200).json(parseProductList(productListInfo[0]));
    } catch (error) {
        return res.status(404).send('No price list!');
    }
};


const getListByChangeability = async (req, res) => {
    try {
        const {interchangeable} = req.body;

        const productListInfo = await knex.raw('SELECT product.id, product_name, user_name, category_name, price, interchangeable, address, '+
        'product.updated_at, product.image_url FROM product JOIN category ON product.category_id=category.id '+
        `JOIN user ON product.user_id=user.id WHERE interchangeable = '${interchangeable}';`);
        
        res.status(200).json(parseProductList(productListInfo[0]));
    } catch (error) {
        return res.status(404).send('No interchangeable list!');
    }
};

const getListByUserId = async (req, res) => {
    try {
        // const {user_id} = req.body;

        const productListInfo = await knex.raw('SELECT product.id, product_name, user_name, category_name, price, interchangeable, address, '+
        'product.updated_at, product.image_url FROM product JOIN category ON product.category_id=category.id '+
        `JOIN user ON product.user_id=user.id WHERE user_id = '${req.params.id}';`);
        
        res.status(200).json(parseProductList(productListInfo[0]));
    } catch (error) {
        return res.status(404).send('No user id list!');
    }
}

module.exports = {
    getProductList,
    getListByCategory,
    getListByPrice,
    getListByChangeability,
    getListByUserId
}