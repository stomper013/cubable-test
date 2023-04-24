require('dotenv').config()
const config_db = require('./config.json');
const node_env = process.env.NODE_ENV || 'development';

const environment = {
    node_env,
    port: process.env.PORT || 3000,
    db: config_db[node_env],
}
module.exports = environment