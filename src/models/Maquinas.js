const { Model, DataTypes} = require('sequelize');
const Fazendas = require('./Fazendas');

class Maquinas extends Model {
  static init(sequelize){
    super.init(
      { 

        id_fazenda  : DataTypes.INTEGER,
        gasto_diesel: DataTypes.DECIMAL(10, 2),
        largura     : DataTypes.DECIMAL(10, 2),
        utilizando  : DataTypes.BOOLEAN,

        descricao: {
            type     : DataTypes.STRING,
            allowNull: false,
        },
        
        tipo: {
          type     : DataTypes.STRING,
          allowNull: false,
        },

        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'maquinas',
      }
    );
  }
  
  static associate(models) {
   this.belongsTo(models.Fazendas, { foreignKey: 'id_fazenda', as: 'fazendas' });
 }    
}
module.exports = Maquinas;