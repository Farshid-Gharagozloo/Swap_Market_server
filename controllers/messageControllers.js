const knex = require('knex')(require('../knexfile'));

function parseMessageList (list) {
    const messages = list.map((message) => {
        return {
            writer_id: message.communicator_user_id,
            text_message: message.text_message,
            caller: message.user_name,
            create_time: message.created_at,
            update_time: message.updated_at
        };
    });

    return messages;
}


const getMessageList = async (req, res) => {

    try {
        const messagesList = await knex.raw('SELECT communicator_user_id, text_message, user.user_name, ' +
            'messages.created_at, messages.updated_at FROM messages ' + 
            'JOIN user ON user.id = messages.receiver_user_id OR user.id = messages.communicator_user_id ' + 
            `WHERE product_id = ${req.params.id} AND (receiver_user_id = ${req.params.user} OR communicator_user_id = ${req.params.user}) AND user.id != ${req.params.user} ORDER BY messages.id;`);
        
            // console.log(messagesList[0]);
        res.status(200).json(parseMessageList(messagesList[0]));
    } catch (error) {
        return res.status(404).send('No Message!');
    }

}


const sendTextMessage = async (req, res) => {

    try {
        const { text_message, user_id } = req.body;

        const owner = await knex.raw(`SELECT user_id FROM product WHERE id = ${req.params.id};`);

        const product_id = req.params.id;
        const communicator_user_id = req.params.user;
        const receiver_user_id = !user_id ? owner[0][0].user_id : user_id;

        const addMessage = await knex('messages').insert({ product_id, communicator_user_id, receiver_user_id, text_message });

        return res.json("successful");
    } catch (error) {
        return res.status(500).send('Error: No Message adds');
    }
}


module.exports = {
    getMessageList,
    sendTextMessage
}