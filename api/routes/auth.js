const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    });
    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        if (err.message.includes("duplicate key")) {
            const duplicatedKey = err.message.split("{ ")[1].split(":")[0];
            res.status(409).json(`Someone has already signed up with that ${duplicatedKey}`);
        } else {
            res.status(500).json(err);
        }
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(404).json("Wrong Password/Username");
        const originalPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);
        const { password, ...info } = user._doc;
        const accessToken = jwt.sign({
            id: user.id,
            admin: user.admin
        }, process.env.SECRET_KEY, { expiresIn: "5d" });
        originalPassword !== req.body.password ? res.status(404).json("Wrong Password/Username") :
            res.status(200).json({ ...info, accessToken });

    } catch (err) {
        res.status(500).json(err.message);
    }
})
module.exports = router;