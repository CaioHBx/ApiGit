'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('terrenos', 'id_safra');
  },

  async down(queryInterface, Sequelize) {
    //
  },
};
