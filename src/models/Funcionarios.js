const { Model, DataTypes } = require('sequelize');
const Usuarios = require('./Usuarios');
const Fazendas = require('./Fazendas');

class Funcionarios extends Model {
  static init(sequelize) {
    super.init(
      {
        permissoes: DataTypes.STRING,
        id_usuario: DataTypes.INTEGER,
        id_fazenda: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'funcionarios',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuarios, { foreignKey: 'id_usuario', as: 'usuarios' });
    this.belongsTo(models.Fazendas, { foreignKey: 'id_fazenda', as: 'fazendas' });
  }
}

module.exports = Funcionarios;
