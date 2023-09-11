'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('operacoes', {
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
      gasto_diesel: {
        type     : Sequelize.DECIMAL(10, 2),
        allowNull: false,
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
      id_maquina: {
        type      : Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'maquinas',
          key  : 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_terreno: {
        type      : Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'terrenos',
          key  : 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_usuario: {
        type      : Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'usuarios',
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
    await queryInterface.dropTable('operacoes');
  },
};