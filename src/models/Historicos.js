const { Model, DataTypes } = require('sequelize');
const Safras   = require('./Safras');
const Fazendas = require('./Fazendas');

class Historicos extends Model {
  static init(sequelize) {
    super.init(
      {
        id_safra             : DataTypes.INTEGER,
        id_fazenda           : DataTypes.INTEGER,
        lucro                : DataTypes.DECIMAL(10, 2),
        peso_colhido_met_quad: DataTypes.DECIMAL(10, 2),
        peso_colhido_total   : DataTypes.DECIMAL(10, 2),
        valor_saca_venda     : DataTypes.DECIMAL(10, 2),
        dia_finalizado       : DataTypes.DATE,

        descricao_geral: {
         type     : DataTypes.STRING,
         allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'historicos',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Fazendas, { foreignKey: 'id_fazenda', as: 'fazendas' });
    this.belongsTo(models.Safras,   { foreignKey: 'id_safra'  , as: 'safras'   });
  }
}

module.exports = Historicos;
