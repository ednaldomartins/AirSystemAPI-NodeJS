const db = require('../database/airSystemDatabase')

async function dropTables() {
    await db.connect()
    await db.query('DROP TABLE place CASCADE')
    await db.query('DROP TABLE flight CASCADE')
    await db.end()

    console.log("Tabelas removidas")
}

dropTables()