const { Model, DataTypes } = require('sequelize');
const Usuarios = require('./Usuarios');
const Fazendas = require('./Fazendas');
const Safras = require('./Safras');

class Gastos extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING,
        valor: DataTypes.DECIMAL(10,2),
        data_inclusao: DataTypes.DATE,
        id_usuario: DataTypes.INTEGER,
        id_fazenda: DataTypes.INTEGER,
        id_safra: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'gastos',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuarios, { foreignKey: 'id_usuario', as: 'usuarios' });
    this.belongsTo(models.Fazendas, { foreignKey: 'id_fazenda', as: 'fazendas' });
    this.belongsTo(models.Safras,   { foreignKey: 'id_safra'  , as: 'safras'   });
  }
}

module.exports = Gastos;