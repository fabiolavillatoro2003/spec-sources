const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'../.env')});

const dbUser = process.env.dbUser;
const dbName = process.env.dbName;
const dbPassword = process.env.dbPassword;
const discardAfterXDays = 14;
const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ornlmee.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};