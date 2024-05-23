const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

notifs = [
    {
        "id": 1,
        "title": "Notif 1",
        "content": "This is a notification",
        "datetime": "2021-01-01T12:00:00Z"
    },
    {
        "id": 2,
        "title": "Notif 2",
        "content": "This is another notification",
        "datetime": "2024-01-01T15:00:00Z"
    }, {
        "id": 3,
        "title": "Notif 2",
        "content": "This is another notification",
        "datetime": "2020-01-01T15:00:00Z"
    }
]
    ;

app.get("/notifs", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(notifs));
});

module.exports = app;