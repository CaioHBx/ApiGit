'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('safras', { 
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
      cultura: {
        type : Sequelize.STRING,
      },
      data_expectativa_colheita: {
        type : Sequelize.DATE,
      },
      data_inicio: {
        type : Sequelize.DATE,
      },
      data_fim: {
        type : Sequelize.DATE,
      },
      gastos_totais: {
        type: Sequelize.DECIMAL(10, 2),
      },
      orcamento_total: {
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
      id_terreno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'terrenos',
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
    await queryInterface.dropTable('safras');    
  },
};
