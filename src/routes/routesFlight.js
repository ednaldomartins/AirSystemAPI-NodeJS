const express = require('express')
const router = express.Router()

router.route('/flight')
    .get((req, res) => {
        res.status(200).json(
            {
                message: 'Usando GET para voos'
            }
        )
    })
    .post((req, res) => {
        res.status(201).json(
            {
                message: 'Usando POST para voos'
            }
        )
    })

router.route('/flight/:flight_id')
    .get((req, res) => {
        const id = req.params.flight_id
        res.status(200).json(
            {
                message: 'Usando GET para voo com ID',
                flight_id: id
            }
        )
    })

module.exports = router