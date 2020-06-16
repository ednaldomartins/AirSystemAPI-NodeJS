const express = require('express')
const app = express()

const routesPlaces = require('./routes/routesPlaces')
const routesFlight = require('./routes/routesFlight')
routes = [routesPlaces, routesFlight]

app.use( '/', routes)

module.exports = app