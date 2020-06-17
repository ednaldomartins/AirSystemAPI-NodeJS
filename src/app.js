const express = require('express')
const app = express()
const bodyParser =  require('body-parser')
const db = require('./data/database/airSystemDatabase')

const routesPlaces = require('./routes/routesPlaces')
const routesFlight = require('./routes/routesFlight')
routes = [routesPlaces, routesFlight]


async function main() {
    console.log("conectando database...")
    await db.connect()
    console.log("conectado!")
    
    app
        //  configuracao para entrada de dados simples
        .use(bodyParser.urlencoded({extended: false}))
        //  configuracao de entrada de dados para JSON
        .use(bodyParser.json())
        //  permissao de acesso
        .use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header(
                'Access-Control-Allow-Header',
                'Origin, X-Requested-With, Content-Type, Accept, AUthorization'
            )
    
            if(req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Method', 'POST, GET')
                return res.status(200).send({})
            }
            next()
        }) 
        //  configurando rotas
        .use( '/', routes)
        //  mensagens de erro
        .use((req, res, next) => {
            const error = new Error('Nenhuma rota foi encontrada')
            error.status = 404
            next(error)
        })
        .use((error, req, res) => {
            res.status(error.status || 500)
            return res.send(
                {
                    error:
                    {
                        message: error.message
                    }
                }
            )
        })
    
}

main()

module.exports = app