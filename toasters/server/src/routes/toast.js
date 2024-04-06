const express = require('express');
const router = express.Router();

const Toast = require('../models/toastModel');

router.post('/', async (req, res) => {
    const { toasterId, toasteeId, content, arcteryxProduct } = req.body;

    Toast.create({ toasterId, toasteeId, content, arcteryxProduct });
    res.sendStatus(201);
});

router.get('/', async (req, res) => {
    const userId = req.query.userId;
    let toasts;

    if (userId) {
        toasts = await Toast.find({ toasterId: userId });
    } else {
        toasts = await Toast.find();
    }
    console.log(toasts);
    res.status(200).send(toasts);
});

module.exports = router;