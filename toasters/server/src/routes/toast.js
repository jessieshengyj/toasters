const express = require('express');
const router = express.Router();

const Toast = require('../models/toastModel');
const User = require('../models/userModel');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUT;
console.log(accountSid);
const client = require('twilio')(accountSid, authToken);

router.post('/', async (req, res) => {
    const { toasterId, toasteeId, content, arcteryxProduct, arcteryxStore } = req.body;

    try {
        const toast = await Toast.create({ toasterId, toasteeId, content, arcteryxProduct, arcteryxStore });

        if (toasteeId) {
            const toastee = await User.findById(toasteeId);

            await client.messages.create({
                body: 'You received a Toast!',
                from: '+12513062242',
                to: toastee.phone
            });
        }
        res.status(201).send(toast._id);
    } catch (error) {
        console.error('Error sending message:', error);
        res.sendStatus(400);
    }
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

        let toastee;
        if (t.toasteeId) {
            toastee = users.find((u) => {
                return u._id.toString() === t.toasteeId;
            });
        } else {
            toastee = { firstName: 'Unkown' };
        }
        t.toasterName = toaster.firstName;
        t.toasteeName = toastee.firstName;

        return { ...t["_doc"], toasterName: toaster.firstName, toasteeName: toastee.firstName };
    });
    
    res.status(200).send(toasts);
});

router.patch('/:id', async (req, res) => {
    const toastId = req.params.id;
    const { userId, like } = req.body;

    try {
        if (like === 1) {
            await Toast.findByIdAndUpdate(toastId, { $push: { likes: userId } }, { new: true });
        } else {
            await Toast.findByIdAndUpdate(toastId, { $pull: { likes: userId } }, { new: true });
        }

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
    }
})

router.patch('/:id/viewed', async (req, res) => {
    const toastId = req.params.id;
    try {
        await Toast.findByIdAndUpdate(toastId, { viewed: true }, { new: true });

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;