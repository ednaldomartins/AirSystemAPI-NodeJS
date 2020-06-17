const server = require('./app')
const port = process.env.PORT || 3000

server.listen(port, (err) => {
    console.log(`server funcionando... ${err || ""}`)
})