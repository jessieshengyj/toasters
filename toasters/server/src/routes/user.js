const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { firstName, lastName, occupation, company, username, password } = req.body;

    User.create({ firstName, lastName, occupation, company, username, password });
    res.sendStatus(201);
});

router.get('/', async (req, res) => {
    const queryName = req.query.name;
    let users;

    if (queryName) {
        users = await User.find({
            $or: [
                { firstName: { $regex: queryName, $options: 'i' } },
                { lastName: { $regex: queryName, $options: 'i' } }
            ]
        })
    } else {
        users = await User.find();
    }
    console.log(users);

    res.status(200).send(users);
})

module.exports = router;
