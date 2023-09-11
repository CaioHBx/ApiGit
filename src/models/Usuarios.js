const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model {
  static init(sequelize) {
    super.init(
      {
        nome : DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'usuarios',
      }
    );
  }
}

module.exports = Usuarios;
