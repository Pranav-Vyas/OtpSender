const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: './config.env'});
const app = express();
require("./database");

var cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/message", require("./api/message"));

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})