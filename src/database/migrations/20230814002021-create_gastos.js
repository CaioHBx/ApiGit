'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('gastos', { 
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
      valor: {
        type : Sequelize.DECIMAL(10,2),
      },
      data_inclusao: {
        type : Sequelize.DATE,
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
      id_safra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'safras',
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
    await queryInterface.dropTable('gastos');    
  },
};