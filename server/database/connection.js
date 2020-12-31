var AWS = require("aws-sdk");
var { awsRemoteConfig } = require("./config");
AWS.config.update(awsRemoteConfig);
var docClient = new AWS.DynamoDB.DocumentClient();
console.log('Database connected');
module.exports = docClient;