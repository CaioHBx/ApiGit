const { Model, DataTypes} = require('sequelize');
const Fazendas = require('./Fazendas');

class Terrenos extends Model {
  static init(sequelize){
    super.init(
      {
        id_fazenda: DataTypes.INTEGER,
        tamanho   : DataTypes.DECIMAL(10, 2),

        descricao: {
            type     : DataTypes.STRING,
            allowNull: false,
        },
        utilizando: {
            type     : DataTypes.BOOLEAN,
            allowNull: false,
        }
      },
      {
        sequelize,
        modelName: 'terrenos',
      }
    )
  }
  
  static associate(models) {
   this.belongsTo(models.Fazenda, { foreignKey: 'id_fazenda', as: 'fazendas' });
 }    
}
module.exports = Terrenos;