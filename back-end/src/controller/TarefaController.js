//Chamadas

const Tarefa = require('../model/Tarefa')

//Operações CRUD

module.exports = {
    async index(req, res) {
        const tarefa = await Tarefa.findAll() // Lista todos os dados
        return res.json(tarefa)
        
    },
    async concluido(req, res) {
        const { concluido } = req.params
        const tarefa = await Tarefa.findAll({
            where: {
                concluido: concluido // Lista concluidos ou em andamento
            }
        })
        
    },
    async nome(req, res) {
        const { nome } = req.body
        const tarefa = await Tarefa.findAll({
            where: {
                nome: { [Op.like]: nome } // Pesquisa por nome
            }
        })
        
    },
    async cadastrar(req, res) {
        const { nome, descricao, concluido } = req.body
        const tarefa = await Tarefa.create({
            nome, descricao, concluido
        }) // Cria a tarefa no banco
        return res.json(tarefa)

    },
    async excluir(req, res) {
        const { id } = req.params
        const tarefa = await Tarefa.destroy({
            where: {
                id: id // Excluindo tarefa por id
            }
        })
        return res.json(tarefa)
        
    },
    async editar(req, res) {
        const { nome, descricao, concluido } = req.body
        const tarefa = await Tarefa.update({
            nome, descricao, concluido
        }, {
            where: {
                id: id // Edita tarefa por id
            }
        })
        return res.json(tarefa)

    }
}