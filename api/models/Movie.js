const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: { type: String, required: true, unqiue: true },
    description: { type: String },
    image: { type: String },
    imageTitle: { type: String },
    imageSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false }

}, { timestamps: true });


module.exports = mongoose.model('Movie', MovieSchema);