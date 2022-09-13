const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

router.post('/', verify, async (req, res) => {
    if (req.user.admin) {
        const newMovie = new Movie({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            imageTitle: req.body.imageTitle,
            imageSm: req.body.imageSm,
            trailer: req.body.trailer,
            video: req.body.video,
            year: req.body.year,
            limit: req.body.limit,
            genre: req.body.genre,
            isSeries: req.body.isSeries
        });
        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (err) {
            if (err.message.includes("duplicate key")) {
                res.status(409).json(`Someone has already added a movie with that title`);
            } else {
                res.status(500).json(err);
            }
        }
    } else {
        if (!res.headersSent) {
            res.status(403).json('Forbidden Action');
        }
    }
});

router.put('/:id', verify, async (req, res) => {
    if (req.user.admin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Forbidden Action');
    }
});
router.delete('/:id', verify, async (req, res) => {
    if (req.user.admin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie Deleted");
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        if (!res.headersSent) {
            res.status(403).json('Forbidden Action');
        }
    }
});
router.get('/find/:id', verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(409).json("Movie does not exist");
        } else {
            res.status(200).json(movie);
        }
    } catch (err) {
        if (!res.headersSent) {
            res.status(500).json(err);
        }
    }
});
router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        if (!res.headersSent) {
            res.status(500).json(err);
        }
    }
});

router.get('/', verify, async (req, res) => {

    if (req.user.admin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            if (!res.headersSent) {
                res.status(500).json(err);
            }

        }
    } else {
        if (!res.headersSent) {
            res.status(403).json('Forbidden Action');
        }
    }
});

module.exports = router;