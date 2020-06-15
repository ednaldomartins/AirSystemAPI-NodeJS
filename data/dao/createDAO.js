const db = require('../database/airSystemDatabase')

async function createTables() {
    
    console.log("conectando database...")
    await db.connect()
    console.log("conectado!")

    await db.query(`
        CREATE TABLE IF NOT EXISTS place (
            place_id serial PRIMARY KEY,
            zip_code VARCHAR (10) NOT NULL,
            country VARCHAR (64) NOT NULL,
            estate VARCHAR (64) NOT NULL,
            city VARCHAR (64) NOT NULL
        )
    `)

    await db.query(`
        CREATE TABLE IF NOT EXISTS flight (
            from_id integer NOT NULL,
            to_id integer NOT NULL,
            flight_id serial PRIMARY KEY,
            flight_date VARCHAR (64),
            FOREIGN KEY (from_id) REFERENCES place (place_id),
            FOREIGN KEY (to_id) REFERENCES place (place_id)
        )
    `)

    await db.end()
    console.log("Conexão encerrada!")

}

createTables()