const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

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
};

const editProfileUser = async (req, res) => {
    try {
        const updateprofile = await knex('user').where({id: req.params.id}).update(req.body);
        if (!updateprofile){
            return res.status(400).send('There is no user with this id!');
        }
        console.log(updateprofile);
        return res.status(201).send('Successful');
    } catch (error) {
        return res.status(500).send('Error: There is no user with this id!');
    }
};

const addProfileUser = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10) 
        const addUser = await knex('user').insert(req.body);
        console.log(addUser);
        return res.status(201).send('Successful');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error: failed!');
    }
}

const login = (req, res) => {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
        return res.status(400).json({
          message: "Login requires user name and password"
        })
    }

    knex('user')
        .where({ user_name: user_name})
        .then((users) => {
            if (users.length === 0){
                return res.status(401).json({message: "Invalid credentials 322"});
            }

            const user = users[0];

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(401)
                .json({
                    message: "Invalid credentials 002"
                })
            }

            const token = jwt.sign(
                { userId: user.id }, 
                process.env.SECRET_KEY,
                {
                  expiresIn: 60 * 60 * 24
                }
            );

            res.json({ token , user_id:user.id });
        })
}

module.exports = {
    getProfileUser,
    editProfileUser,
    addProfileUser,
    login
}