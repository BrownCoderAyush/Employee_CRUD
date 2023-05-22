const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.PORT , process.env.SYNC_DB);
module.exports = {
    PORT : process.env.PORT,
    SYNC_DB : process.env.SYNC_DB
}