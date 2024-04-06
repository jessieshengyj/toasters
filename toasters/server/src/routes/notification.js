const express = require('express');
const router = express.Router();

const Toast = require('../models/toastModel');

// router.get('/:id', async (req, res) => {
//     const userId = req.params.id;

//     const toasts = await Toast.find({ toasteeId: userId, viewed: false });

//     res.status(200).send(toasts);
// });

// router.post('/:id', async (req, res) => {

// })
