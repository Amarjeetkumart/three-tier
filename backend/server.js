const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "visitoruser",
    password: "StrongPass123!",
    database: "visitor_db"
});


db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected");
});

app.get("/api/count", (req, res) => {
    db.query("UPDATE visitors SET count = count + 1 WHERE id = 1");
    db.query("SELECT count FROM visitors WHERE id = 1", (err, result) => {
        res.json(result[0]);
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
