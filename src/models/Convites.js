const { Model, DataTypes} = require('sequelize');
const Fazendas = require('./Fazendas');

class Convites extends Model {
  static init(sequelize){
    super.init(
      { 
        id_fazenda: {
          type     : DataTypes.INTEGER,
          allowNull: false,
        },  

        email_usuario_remetente: {
          type     : DataTypes.STRING,
          allowNull: false,
        },

        email_usuario_destinatario: {
          type     : DataTypes.STRING,
          allowNull: false,
        },

        descricao: {
          type     : DataTypes.STRING,
          allowNull: false,
        },

        permissoes: {
          type     : DataTypes.STRING,
          allowNull: false,
        },

        lido: {
          type     : DataTypes.BOOLEAN,
          allowNull: false,
        },
        
      },
      {
        sequelize,
        modelName: 'convites',
      }
    );
  }
  
  static associate(models) {
   this.belongsTo(models.Fazendas, { foreignKey: 'id_fazenda', as: 'fazendas' });
 }    
}
module.exports = Convites;