const express = require('express')
const router = express.Router()
const insertDAO = require('../data/dao/insertDAO')
const selectDAO = require('../data/dao/selectDAO')

router.route('/flight')
    .get(async(req, res) => {
        const result = await selectDAO.listTable('flight')
        console.log(result.rows)
        res.status(200).json(
            {
                message: 'Usando GET para pegar todos os voos',
                flights: result.rows
            }
        )
    })
    .post(async(req, res) => {
        const {from_id, to_id, flight_date} = req.body
        const result = await insertDAO.insertFlight(from_id, to_id, flight_date)
        console.log(result.rows)
        res.status(201).json(
            {
                message: 'POST: novo voo criado',
                flight: result.rows
            }
        )
    })

router.route('/flight/all')
    .get(async(req, res) => {
        const result = await selectDAO.getAllFlights()
        console.log(result.rows)
        res.status(200).json(
            {
                message: 'Usando GET para pegar todos os voos com nome dos locais',
                flights: result.rows
            }
        )
    })

router.route('/flight/from/:city_name')
    .get(async(req, res) => {
        const cityName = req.params.city_name
        const result = await selectDAO.getFlightFromCity(cityName)
        console.log(result.rows)
        res.status(200).json(
            {
                message: 'Usando GET para local de partida do voo usando nome da cidade',
                flight: result.rows,
            }
        )
    })

router.route('/flight/to/:city_name')
    .get(async(req, res) => {
        const cityName = req.params.city_name
        const result = await selectDAO.getFlightToCity(cityName)
        console.log(result.rows)
        res.status(200).json(
            {
                message: 'Usando GET para local de destino do voo usando nome da cidade',
                flight: result.rows
            }
        )
    })

module.exports = router