const express = require('express');
const conf = require('./config/conf');
const connectDb = require("./config/db");
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: "*",
        methods: "GET,POST,PUT,PATCH,DELETE",
        credentials: true,
    })
);

connectDb();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));


app.listen(conf.port, () => {
    console.log(`Server running on ${conf.port}`);
});