'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historico', {
      id: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true,
        allowNull    : false,
      },
      descricao_geral: {
        type     : Sequelize.STRING,
        allowNull: false,
      },
      lucro: {
        type: Sequelize.DECIMAL(10, 2),
      },
      peso_colhido_met_quad: {
        type: Sequelize.DECIMAL(10, 2),
      },
      peso_colhido_total: {
        type: Sequelize.DECIMAL(10, 2),
      },
      valor_saca_venda: {
        type: Sequelize.DECIMAL(10, 2),
      },
      id_fazenda: {
        type      : Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'fazendas',
          key  : 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_safra: {
        type      : Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'safras',
          key  : 'id',
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('historico');
  },
};