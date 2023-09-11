'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('safras', 'peso_colhido_met_quad');
    await queryInterface.removeColumn('safras', 'peso_colhido_total');
    await queryInterface.removeColumn('safras', 'valor_saca');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('safras', 'peso_colhido_met_quad', {
      type: Sequelize.DECIMAL(10, 2),
    });
    await queryInterface.addColumn('safras', 'peso_colhido_total', {
      type: Sequelize.DECIMAL(10, 2),
    });
    await queryInterface.addColumn('safras', 'valor_saca', {
      type: Sequelize.DECIMAL(10, 2),
    });
  },
};
