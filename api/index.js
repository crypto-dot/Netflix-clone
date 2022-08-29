const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("successful connection")).catch(err => console.error(err));

app.listen(8080, (req, res) => {
    console.log('backend server is running');
});
