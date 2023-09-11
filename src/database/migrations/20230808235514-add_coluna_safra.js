'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE safras
      ADD COLUMN finalizada BOOL;
    `);
  },
};
