'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE maquinas
      ADD COLUMN utilizando BOOL;
    `);
  }
};