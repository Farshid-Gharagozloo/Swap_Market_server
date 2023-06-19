const knex = require('knex')(require('../knexfile'));

function parseProfileInfo (info) {
    return {
        user_name: info.user_name,
        first_name: info.first_name,
        last_name: info.last_name,
        address: info.address,
        postal_code: info.postal_code,
        email: info.email,
        contact_number: info.contact_number
    };
}

const getProfileUser = async (req, res) => {
    try {
        const profileInfo = await knex.raw('SELECT user_name, first_name, last_name, ' +
            `address, postal_code, email, contact_number FROM user WHERE id = ${req.params.id}`);

        res.status(200).json(parseProfileInfo(profileInfo[0][0]));
    } catch (error) {
        return res.status(404).send('There is no user with this id!');
    }
}

const editProfileUser = async (req, res) => {
    try {
        // const { user_name, first_name, last_name, address, postal_code, email, phone: contact_number } = req.body;

        const updateprofile = await knex('user').where({id: req.params.id}).update(req.body);
        if (!updateprofile){
            return res.status(400).send('There is no user with this id!');
        }
        console.log(updateprofile);
        return res.send('Successful');
    } catch (error) {
        return res.status(500).send('Error: There is no user with this id!');
    }
}

module.exports = {
    getProfileUser,
    editProfileUser
}