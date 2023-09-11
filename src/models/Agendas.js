const { Model, DataTypes } = require('sequelize');
const Usuarios = require('./Usuarios');
const Fazendas = require('./Fazendas');
const Operacoes = require('./Operacoes');

class Agendas extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao    : DataTypes.STRING,
        finalizada   : DataTypes.BOOLEAN,
        dia_concluido: DataTypes.DATE,
        id_usuario   : DataTypes.INTEGER,
        id_fazenda   : DataTypes.INTEGER,
        id_operacao  : DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'agendas',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuarios,  { foreignKey: 'id_usuario' , as: 'usuarios' });
    this.belongsTo(models.Fazendas,  { foreignKey: 'id_fazenda' , as: 'fazendas' });
    this.belongsTo(models.Operacoes, { foreignKey: 'id_operacao', as: 'operacoes'});
  }
}

module.exports = Agendas;