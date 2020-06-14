const router = require('express').Router();
const db = require('../data/dbConfig.js');

// READ
// read all users
router.get('/', (req, res) => {
    db('users').then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(400).json({ message: 'Could not create user'})
    })
})

module.exports = router;