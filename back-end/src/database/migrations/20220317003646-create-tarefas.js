'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('tarefas', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true   
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      concluido: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    
    });

  },

  async down(queryInterface, Sequelize) {

     await queryInterface.dropTable('tarefas');
     
  }
};
