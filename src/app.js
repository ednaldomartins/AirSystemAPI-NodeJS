const express = require('express')
const app = express()

const routesPlaces = require('./routes/routesPlaces')

app.use( '/places', routesPlaces)

module.exports = app