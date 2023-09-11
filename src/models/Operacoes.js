const { Model, DataTypes } = require('sequelize');
const Safras   = require('./Safras');
const Maquinas = require('./Maquinas');
const Terrenos = require('./Terrenos');
const Usuarios = require('./Usuarios');
const Fazendas = require('./Fazendas');

class Operacoes extends Model {
  static init(sequelize) {
    super.init(
      {
        id_safra    : DataTypes.INTEGER,
        id_maquina  : DataTypes.INTEGER,
        id_terreno  : DataTypes.INTEGER,
        id_usuario  : DataTypes.INTEGER,
        id_fazenda  : DataTypes.INTEGER,
        id_maquina_vinculada : DataTypes.INTEGER,
        finalizada: DataTypes.BOOLEAN,
        descricao   : DataTypes.STRING,
        dia_realizado : DataTypes.DATE,
        gasto_diesel: DataTypes.DECIMAL(10, 2),
      },
      {
        sequelize,
        modelName: 'operacoes',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Fazendas, { foreignKey: 'id_fazenda', as: 'fazendas' });
    this.belongsTo(models.Safras,   { foreignKey: 'id_safra'  , as: 'safras'   });
    this.belongsTo(models.Maquinas, { foreignKey: 'id_maquina', as: 'maquinas' });
    this.belongsTo(models.Terrenos, { foreignKey: 'id_terreno', as: 'terrenos' });
    this.belongsTo(models.Usuarios, { foreignKey: 'id_usuario', as: 'usuarios' });
  }
}

module.exports = Operacoes;
