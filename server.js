const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6815",
    database: "course_db"
});

app.get("/courses", (req, res) => {
    db.query("SELECT * FROM courses", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});