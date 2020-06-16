const express = require('express')
const router = express.Router()

router.route('/places')
    .get((req, res) => {
        res.status(200).json(
            {
                message: 'Usando GET para rota de locais'
            }
        )
    })
    .post((req, res) => {
        res.status(201).json(
            {
                message: 'Usando POST para rota de locais'
            }
        )
    })

router.route('/places/:place_id')
    .get((req, res) => {
        const id = req.params.place_id
        res.status(200).json(
            {
                message: 'Usando GET para rota de locais com ID do local',
                place_id: id
            }
        )
    })

module.exports = router