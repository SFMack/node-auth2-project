const router = require('express').Router();

const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

// register user
router.post('/register', async (req, res) => {
    let newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 12);
    newUser.password = hash;

    try {
        const added = await Users.addUser(newUser);
        res.status(201).json(added)
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }


})

module.exports = router;