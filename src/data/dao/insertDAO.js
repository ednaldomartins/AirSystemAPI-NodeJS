const db = require('../database/airSystemDatabase')

const insertPlace = async(zipCode, country, estate, city) => {
    const queryPlace = "INSERT INTO place (zip_code, country, estate, city) VALUES ($1, $2, $3, $4) RETURNING *"
    const result = await db.query(queryPlace, [zipCode, country, estate, city])
    return result
}

const insertFlight = async(fromId, toId, flightDate) => {
    const queryFlight = "INSERT INTO flight (from_id, to_id, flight_date) VALUES ($1,$2, $3) RETURNING *"
    const result = await db.query(queryFlight, [fromId, toId, flightDate])
    return result
}

module.exports.insertPlace = insertPlace
module.exports.insertFlight = insertFlight