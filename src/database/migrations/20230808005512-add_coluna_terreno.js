'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE terrenos
      ADD COLUMN utilizando BOOL;
    `);
  },
};