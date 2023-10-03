const express = require("express");
const app = express();
const port = 5000;
const secretKey = "secretKey";
const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
    res.json({ message: "a simple api" });
});

app.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: "anoop",
        email: "abc@test.com"
    };
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (err, token) => {
        res.json({ token });
    });
});

app.post("/profile", verifyToken, (req, res) => {    // apply middleware on single route
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.send({ result: "Invalid token" });
        } else {
            res.json({
                message: "Profile accessed",
                authData
            });
        }
    });
});

function verifyToken(req, res, next) {                // middleware
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" "); // Split by space
        if (bearer.length === 2) { // Check if array has 2 elements
            const token = bearer[1];
            req.token = token;
            next();
        } else {
            res.send({
                result: 'Token is not valid'
            });
        }
    }
}

app.listen(port, () => {
    console.log("app is running on 5000 port");

});
