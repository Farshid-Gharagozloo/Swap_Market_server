const knex = require('knex')(require('../knexfile'));

function parseProfileInfo (info) {
    return {
        user_name: info.user_name,
        first_name: info.first_name,
        last_name: info.last_name,
        address: info.address,
        postal_code: info.postal_code,
        email: info.email,
        phone: info.contact_number
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

module.exports = {
    getProfileUser
}