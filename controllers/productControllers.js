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


const getProductItems = async (req, res) =>{

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

module.exports = {
    getProductItems
}
