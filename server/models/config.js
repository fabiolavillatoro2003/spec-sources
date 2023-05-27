require('dotenv').config({path: path.resolve(__dirname,'../../.env')});

const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays = 14;
const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ornlmee.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};