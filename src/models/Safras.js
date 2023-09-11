const { Model, DataTypes} = require('sequelize');
const Fazendas = require('./Fazendas');
const Terrenos = require('./Terrenos');

class Safras extends Model {
  static init(sequelize){
    super.init(
      {
        id_fazenda: DataTypes.INTEGER,
        id_terreno: DataTypes.INTEGER,

        descricao: {
            type     : DataTypes.STRING,
            allowNull: false,
        },
        
        cultura                  : DataTypes.STRING,
        data_expectativa_colheita: DataTypes.DATE,
        data_inicio              : DataTypes.DATE,
        finalizada               : DataTypes.BOOLEAN,
        gastos_totais            : DataTypes.DECIMAL(10, 2),
        orcamento_total          : DataTypes.DECIMAL(10, 2),
      },
      {
        sequelize,
        modelName: 'safras',
      }
    )
  }
  
  static associate(models) {
   this.belongsTo(models.Fazenda, { foreignKey: 'id_fazenda', as: 'fazendas' });
   this.belongsTo(models.Terrenos, { foreignKey: 'id_terreno', as: 'terrenos' });
 }    
}
module.exports = Safras;