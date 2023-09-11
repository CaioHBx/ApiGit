const { Model, DataTypes } = require('sequelize');
const Usuarios = require('./Usuarios');
const Fazendas = require('./Fazendas');

class Estoques extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao     : DataTypes.STRING,
        valor_unitario: DataTypes.DECIMAL(10,2),
        quantidade    : DataTypes.INTEGER,
        id_usuario    : DataTypes.INTEGER,
        id_fazenda    : DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'estoques',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuarios,  { foreignKey: 'id_usuario' , as: 'usuarios' });
    this.belongsTo(models.Fazendas,  { foreignKey: 'id_fazenda' , as: 'fazendas' });
  }
}

module.exports = Estoques;