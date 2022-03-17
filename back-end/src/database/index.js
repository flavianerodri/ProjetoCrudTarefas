//Chamadas

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Tarefa = require('../model/Tarefa')

//Conexão Sequelize

const connection = new Sequelize(dbConfig)

Tarefa.init(connection)

//Exportando

module.exports = connection