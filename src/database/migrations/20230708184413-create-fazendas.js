'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('fazendas', { 
      id: {
        type          : Sequelize.INTEGER,
        primaryKey    : true,
        autoIncrement : true,
        allowNull     : false,
      },
      data_criacao: {
        type: Sequelize.DATE,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      email: {
        type     : Sequelize.STRING,
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      nome: {
        type     : Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type     : Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type     : Sequelize.DATE,
        allowNull: false,
      },
    });  
  },

  async down(queryInterface, Sequelize) {    
    await queryInterface.dropTable('fazendas');    
  },
};
