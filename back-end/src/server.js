//Chamadas de dependências

const express = require('express')
const routes = require('./routes')

const cookieParser = require('cookie-parser')
const cors = require('cors')

require('./database')

const app = express()

//Middleware

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

//Executando servidor na porta 3003

app.listen(3003)
