'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('agendas', { 
      id: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true,
        allowNull    : false,
      },
      descricao: {
        type     : Sequelize.STRING,
        allowNull: false,
      },
      dia_concluido: {
        type: Sequelize.DATE,
      },
      finalizada: {
        type: Sequelize.BOOLEAN,
      },
      
      id_fazenda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'fazendas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_operacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'operacoes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('agendas');    
  },
};