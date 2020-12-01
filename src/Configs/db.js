const {Pool} = require('pg')


const db = new Pool({
    database: "prod",
    password: "abcd123",
    port: 5432,
    host: "localhost",
    user: "ebiebi"
})

module.exports = db