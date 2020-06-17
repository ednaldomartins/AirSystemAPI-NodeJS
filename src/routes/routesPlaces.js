const express = require('express')
const router = express.Router()
const insertDAO = require('../data/dao/insertDAO')
const selectDAO = require('../data/dao/selectDAO')

router.route('/places')
    .get(async(req, res) => {
        const result = await selectDAO.listTable('place')
        console.log(result.rows)
        res.status(200).json(
            {
                message: 'Usando GET para rota de locais',
                places: result.rows
            }
        )
    })
    .post(async(req, res) => {
        const { cep, country, state, city } = req.body
        const result = await insertDAO.insertPlace(cep, country, state, city)
        console.log(result.rows)
        return res.status(201).json(
            {
                message: 'POST: novo local criado',
                place: result.rows
            }
        )
    })

router.route('/places/:city_name')
    .get(async(req, res) => {
        const cityName = req.params.city_name
        const result = await selectDAO.getPlace(cityName)
        console.log(result.rows)
        res.status(200).json(
            {
                message: 'Usando GET para rota de locais com o nome do local',
                place: result.rows,

            }
        )
    })

module.exports = router