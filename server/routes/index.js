const express = require("express");
const { getShortUrl, saveShortUrl } = require("../controllers");
const router = express.Router();

// DEMO PURPOSES: Allow CORS
router.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

router.get("/", function (req, res) {
    const _host = req.headers.host;
    res.send({
        "status": 200,
        "message": "Success",
        "api": "url-shortener", "version": "20.12.16",
        "services": [
            {
                "name": "GET original URL given URL hash",
                "endpoint": `http://${_host}/long/:hash`
            },
            {
                "name": "POST short URL given long URL",
                "endpoint": `http://${_host}/short`
            }]
    });
});

router.get("/short/:shortUrl", getShortUrl);

router.put("/short", saveShortUrl);

module.exports = router;