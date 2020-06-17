const db = require('../database/airSystemDatabase')

const listTable = async(tableName) => {
    let list
    list = await db.query('SELECT * FROM ' + tableName)
    return list
}

const getPlace = async(cityName) => {
    let place
    place = await db.query('SELECT * FROM place WHERE city = $1', [cityName])
    return place
}

const getFlightFromCity = async(cityName) => {
    let flightFromCity
    flightFromCity = await db.query(
        `SELECT
            flight_id,
            from_id, 
            to_id, 
            B.city AS from_city,  
            C.city AS to_city,
            flight_date 
        FROM flight as A
        INNER JOIN place AS B on A.from_id = B.place_id
        INNER JOIN place AS C on A.to_id = C.place_id
        WHERE B.city = $1`, [cityName]
    )
    return flightFromCity
}

const getFlightToCity = async(cityName) => {
    let flightFromCity
    flightFromCity = await db.query(
        `SELECT
            flight_id,
            from_id, 
            to_id, 
            B.city AS from_city,  
            C.city AS to_city,
            flight_date
        FROM flight as A
        INNER JOIN place AS B on A.from_id = B.place_id
        INNER JOIN place AS C on A.to_id = C.place_id
        WHERE C.city = $1`, [cityName]
    )
    return flightFromCity
}

const getAllFlights = async() => {
    let flightFromCity
    flightFromCity = await db.query(
        `SELECT
            flight_id,
            from_id, 
            to_id, 
            B.city AS from_city,  
            C.city AS to_city,
            flight_date
        FROM flight as A
        INNER JOIN place AS B on A.from_id = B.place_id
        INNER JOIN place AS C on A.to_id = C.place_id`
    )
    return flightFromCity
}

module.exports.listTable = listTable
module.exports.getPlace = getPlace
module.exports.getFlightFromCity = getFlightFromCity
module.exports.getFlightToCity = getFlightToCity
module.exports.getAllFlights = getAllFlights