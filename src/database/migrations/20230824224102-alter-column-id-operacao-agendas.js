'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('agendas', 'id_operacao', {
      type: Sequelize.INTEGER,
      allowNull: true,  // Definindo allowNull como true para permitir nulos
      references: {
        model: 'operacoes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverter as alterações feitas na função up
    await queryInterface.changeColumn('agendas', 'id_operacao', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'operacoes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },
};
