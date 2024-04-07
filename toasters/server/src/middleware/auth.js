const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

const authenticate = asyncHandler(async (req, res, next) => {
    let token = req.headers.authorization;

    if (token) {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded._id);
        next();
    } else {
        res.sendStatus(401);
    }
})

module.exports = authenticate;
