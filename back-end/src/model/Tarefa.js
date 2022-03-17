//Chamadas

const {Model, DataTypes} = require('sequelize')

//Mapeando tabela

class Tarefa extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            concluido: DataTypes.BOOLEAN
        },{
            sequelize
        }
        )
    }
}

//Exportando

module.exports = Tarefa;