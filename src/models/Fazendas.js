const { Model, DataTypes} = require('sequelize');

class Fazendas extends Model {
  static init(sequelize){
    super.init(
      {
        data_criacao : DataTypes.DATE,
        descricao    : DataTypes.STRING,
        endereco     : DataTypes.STRING,
        telefone     : DataTypes.STRING,

        email: {
            type      : DataTypes.STRING,
            unique    : true,
            allowNull : false,
        },
        nome: {
            type      : DataTypes.STRING,
            allowNull : false,
        },
      },
      {
        sequelize,
        modelName: 'fazendas',
      }
    )
  }    
}
module.exports = Fazendas;