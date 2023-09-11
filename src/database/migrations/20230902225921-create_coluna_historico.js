'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE historicos
      ADD COLUMN dia_finalizado DATE;
    `);
  },
};
