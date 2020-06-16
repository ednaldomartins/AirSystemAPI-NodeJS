const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'air_system',
    password: 'pg123',
    port: 5432
})

module.exports = client