//Chamadas

const express = require('express')
const TarefaController = require('./controller/TarefaController')
const Tarefa = require('./model/Tarefa')

const routes = express.Router()


//Rotas

routes.get('/tarefa', TarefaController.index)
routes.get('/tarefa/:concluido', TarefaController.concluido)
routes.get('/tarefa/nome', TarefaController.nome)
routes.post('/tarefa/criar', TarefaController.cadastrar)
routes.delete('/tarefa/:id', TarefaController.excluir)
routes.put('/tarefa/editar', TarefaController.editar)


//Exportando

module.exports = routes;