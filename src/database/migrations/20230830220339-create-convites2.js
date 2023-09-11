'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('convites', { 
      id: {
        type         : Sequelize.INTEGER,
        primaryKey   : true,
        autoIncrement: true,
        allowNull    : false,
      },

      id_fazenda: {
        type      : Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: 'fazendas',
          key  : 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }, 

      email_usuario_remetente: {
        type     : Sequelize.STRING,
        allowNull: false,
      },

      email_usuario_destinatario: {
        type     : Sequelize.STRING,
        allowNull: false,
      },

      descricao: {
        type     : Sequelize.STRING,
        allowNull: false,
      },
      
      createdAt: {
        type     : Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type     : Sequelize.DATE,
        allowNull: false,
      },
    });  
  },

  async down(queryInterface, Sequelize) {    
    await queryInterface.dropTable('convites');    
  },
};
