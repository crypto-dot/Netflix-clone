const router = require('express').Router();
const { model } = require('mongoose');
const List = require('../models/List');
const verify = require('../verifyToken');

router.post('/', verify, async (req, res) => {
    if (req.user.admin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(200).json(savedList);
        } catch (err) {
            if (err.message.includes("duplicate key")) {
                res.status(409).json(`Someone has already added a list with that title`);
            } else {
                res.status(500).json(err);
            }
        }
    } else {
        res.status(403).json('Forbidden Action');
    }
});
router.delete('/:id', verify, async (req, res) => {
    if (req.user.admin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        if (!res.headersSent) {
            res.status(403).json('Forbidden Action');
        }
    }
});
router.get('/', verify, async (req, res) => {
    const genreQuery = req.query.genre;
    const typeQuery = req.query.type;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } }
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } }
                ]);
            }

        } else {
            list = await List.find();
        }
        res.status(200).json(list);
    } catch (err) {
        if (!res.headersSent) {
            res.status(500).json(err);
        }
    }

});
module.exports = router;