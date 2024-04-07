const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

const generateToken = (_id) => jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

router.post('/', async (req, res) => {
    console.log('here');
    const { firstName, lastName, occupation, company, username, password, phone, experience } = req.body;
    console.log('body', req.body);
    const user = await User.create({ firstName, lastName, occupation, company, username, password, phone, experience });
    console.log('createdUser', user);
    res.status(201).send({ token: generateToken(user._id) });
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

    res.status(200).send(users);
})

module.exports = router;
