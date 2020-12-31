const md5 = require("md5");
var { shortUrlsTable } = require("../database/config");
const docClient = require("../database/connection");
const { errorsHandler } = require("../utils");

const scanUrls = ( _shortUrl, _originalUrl ) => {
    const params = { //conditional apply FilterExpression based on given _shortUrl or _originalUrl
        TableName: shortUrlsTable,
        ...(_shortUrl ? ({ FilterExpression: "shortUrl = :sUrl" }) :
            _originalUrl && { FilterExpression: "originalUrl = :oUrl" }),
        ExpressionAttributeValues: {
          ...(_shortUrl && {":sUrl": _shortUrl }),
          ...(_originalUrl && {":oUrl": _originalUrl })
        }
    };
    return docClient.scan(params).promise();
};

const getShortUrl = ( req, res ) => {
    const _shortUrl = "/" + req.params.shortUrl;
    scanUrls( _shortUrl, null ).then((data) => {
        if ( data && data.Items ){
            res.json({
                status: 200,
                message: "Success",
                hash: data.Items[0].hashKey,
                shortUrl: _shortUrl,
                originalUrl: data.Items[0].originalUrl
            });
        } else {
            res.json({
                status: 200,
                message: "No existing Original URL found given short URL. You can make a new one.",
                hash: null,
                shortUrl: _shortUrl,
                originalUrl: null
            });
        }
    }).catch(err => errorsHandler(err, req, res));
}

const saveShortUrl = ( req, res ) => {
    const _url = req.body.url;
    scanUrls( null, _url ).then((err, data) => {
        if( !data ) {
            const _hash = md5( _url );
            const _shortUrl = "/" + _hash.substr(0, 7);
            const params = {
                TableName: shortUrlsTable,
                Item: { originalUrl: _url, shortUrl: _shortUrl, hashKey: _hash }
            };
            docClient.put(params, (err, data) => {
                if(err) errorsHandler(err, req, res); 
                else if( data && data.Item ) {
                    const _shortUrl = "/" + data.Item.hash.substr(0, 7);
                    res.json({
                        status: 201,
                        message: "Success",
                        hash: data.Item.hashKey,
                        shortUrl: _shortUrl,
                        originalUrl: data.Item.originalUrl
                    });
                } else {
                    res.json({
                        status: 201,
                        message: "Success",
                        hash: _hash,
                        shortUrl: "/" + _hash.substr(0, 7),
                        originalUrl: _url
                    });
                }
            });
        } else if ( data && data.Items ) {
            res.json({
                status: 201,
                message: "Success",  
                hash: data.Items[0].hashKey,
                shortUrl: data.Items[0].shortUrl,
                originalUrl: _url
            });
        }
    }).catch(err => errorsHandler(err, req, res));
};

module.exports = { scanUrls, getShortUrl, saveShortUrl };