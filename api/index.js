const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const authRoute = require('./routes/auth');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("successful connection"))
    .catch(err => console.error(err));
app.use(express.json());
app.use("/api/auth", authRoute);
app.listen(8080, (req, res) => {
    console.log('backend server is running');
});
