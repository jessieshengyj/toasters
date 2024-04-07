const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

const generateToken = (_id) => jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && user.password === password) {
        res.send({ token: generateToken(user._id) })
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;
