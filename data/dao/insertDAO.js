const db = require('../database/airSystemDatabase')

async function insertDataTest() {

    console.log("conectando database...")
    await db.connect()
    console.log("conectado!")

    const queryPlace = "INSERT INTO place (zip_code, country, estate, city) VALUES ($1, $2, $3, $4)"

    await db.query(queryPlace, ['52200000', 'Brasil', 'São Paulo', 'São Paulo'])
    await db.query(queryPlace, ['58300000', 'Brasil', 'Paraíba', 'João Pessoa'])
    await db.query(queryPlace, ['58300000', 'Brasil', 'Pernambuco', 'Recife'])
    await db.query(queryPlace, ['52200000', 'Brasil', 'Rio Grande do Norte', 'Natal'])
    
    const queryFlight = "INSERT INTO flight (from_id, to_id, flight_date) VALUES ($1,$2, $3)"

    await db.query(queryFlight, [1, 3, '15-06-2020, 13:12'])
    await db.query(queryFlight, [2, 4, '15-06-2020, 23:12'])
    await db.query(queryFlight, [3, 4, '16-06-2020, 13:20'])
    await db.query(queryFlight, [4, 1, '17-07-2020, 18:10'])

    console.log("Dados inseridos.")

    await db.end()
    
    console.log("Conexão encerrada!")

}

async function insertPlace(zipCode, country, estate, city) {
    const queryPlace = "INSERT INTO place (zip_code, country, estate, city) VALUES ($1, $2, $3, $4)"
    await db.query(queryPlace, [zipCode, country, estate, city])
}

async function insertFlight(fromId, toId, flightDate) {
    const queryFlight = "INSERT INTO flight (from_id, to_id, flight_date) VALUES ($1,$2, $3)"
    await db.query(queryFlight, [fromId, toId, flightDate])
}

insertDataTest()