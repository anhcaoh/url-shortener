const md5 = require("md5");
const getShortUrl = ( url ) => {
    const hash = md5( url );
    return hash;
};

const getLongUrl = ( hash ) => {
    return hash;
}

module.exports = { getShortUrl , getLongUrl };