'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE operacoes
      ADD COLUMN dia_realizado DATE;
    `);
  },
};
