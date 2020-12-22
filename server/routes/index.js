const express = require("express");
const { getShortUrl, getLongUrl } = require("../controllers");
const { errorsHandler } = require("../utils");
const router = express.Router();

// DEMO PURPOSES: Allow CORS
router.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
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

router.get("/long/:hash", function (req, res) {
    const _hash = req.params.hash;
    const _originalUrl = getLongUrl(_hash);
    if( _originalUrl ){
        res.json({
            status: 200,
            message: "Success",
            url: req.params.url,
            hash: _hash,
            originalUrl: _originalUrl
        });
    } else {
        errorsHandler(req, res)
    }
});

router.post("/short", function (req, res) {
    const _hash = getShortUrl(req.body.url);
    if( _hash ){
        res.json({
            status: 200,
            message: "Success",
            url: req.params.url,
            hash: _hash,
            shortUrl: "/" + _hash.substr(0, 7)
        });
    } else {
        errorsHandler(req, res);
    }
});
module.exports = router;