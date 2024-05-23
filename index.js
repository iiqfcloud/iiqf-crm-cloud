const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

notifs = [
    {
        "id": 1,
        "title": "Notif 1",
        "content": "This is a notification"
    },
    {
        "id": 2,
        "title": "Notif 2",
        "content": "This is another notification"
    }
]
    ;

app.get("/notifs", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(notifs));
});

module.exports = app;