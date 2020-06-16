const db = require('../database/airSystemDatabase')

async function connectDatabase () {
    console.log("conectando database...")
    await db.connect()
    console.log("conectado!")
}

async function disconnectDatabase () {
    await db.end()
    console.log("Conexão encerrada!")
}

async function listTable(tableName) {
    var list
    list = await db.query('SELECT * FROM ' + tableName)
    console.log(tableName)
    console.log(list.rows)
}

connectDatabase()
listTable('place')
listTable('flight')
