'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE operacoes
      ADD COLUMN finalizada BOOL;
    `);
    await queryInterface.sequelize.query(`
      ALTER TABLE operacoes
      ADD COLUMN id_maquina_vinculada INT(11);
    `);
  },
};