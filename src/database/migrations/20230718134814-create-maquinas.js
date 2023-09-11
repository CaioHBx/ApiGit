'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('maquinas', { 
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
      tipo: {
        type     : Sequelize.STRING,
        allowNull: false,
      },
      gasto_diesel: {
        type: Sequelize.DECIMAL(10, 2),
      },
      largura: {
        type: Sequelize.DECIMAL(10, 2),
      },
      velocidade: {
        type: Sequelize.DECIMAL(10, 2),
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
    await queryInterface.dropTable('maquinas');    
  },
};
