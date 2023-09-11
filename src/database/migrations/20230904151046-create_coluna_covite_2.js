'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE convites
      ADD COLUMN lido BOOL;
    `);
  },
};
