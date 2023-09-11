'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('historico', 'historicos');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('historicos', 'historico');
  }
};
