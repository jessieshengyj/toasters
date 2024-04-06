const express = require('express');
const router = express.Router();

const Toast = require('../models/toastModel');
const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { toasterId, toasteeId, content, arcteryxProduct } = req.body;

    Toast.create({ toasterId, toasteeId, content, arcteryxProduct, likes: 0 });
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

    const users = await User.find();
    toasts = toasts.map((t) => {
        const toaster = users.find((u) => {
            return u._id.toString() === t.toasterId;
        });

        const toastee = users.find((u) => {
            return u._id.toString() === t.toasteeId;
        });
        t.toasterName = toaster.firstName;
        t.toasteeName = toastee.firstName;
        console.log(t);
        return { ...t["_doc"], toasterName: toaster.firstName, toasteeName: toastee.firstName };
    });
    
    res.status(200).send(toasts);
});

router.patch('/:id', async (req, res) => {
    console.log('here');
    const toastId = req.params.id;
    try {
        await Toast.findByIdAndUpdate(toastId, { $inc: { likes: 1 } }, { new: true });

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;