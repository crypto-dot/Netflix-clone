const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const verify = require('../verifyToken');

router.put('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.admin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Forbidden Action');
    }
});

router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.admin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        console.log(req.user);
        res.status(403).json('Forbidden Action');
    }
});
router.get('/find/:id', verify, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(409).json("No Such User");
        } else {
            const { password, ...info } = user._doc;
            res.status(200).json(info);
        }
    } catch (err) {
        if (err.message.includes("Cast to ObjectId failed")) {
            res.status(400).json("Invalid User ID");
        } else {
            console.log(err.message);
            res.status(500).json(err);
        }
    }
});
router.get('/', verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.admin) {
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Forbidden Action');
    }
});
router.get('/stats', async (req, res) => {
    try {
        const data = await User.aggregate(
            [
                {
                    $project: {
                        month: { $month: "$createdAt" },
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 },
                    },
                }
            ]
        );
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
module.exports = router;