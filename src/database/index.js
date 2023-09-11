const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const Usuarios     = require('../models/Usuarios');
const Fazendas     = require('../models/Fazendas');
const Funcionarios = require('../models/Funcionarios');
const Maquinas     = require('../models/Maquinas');
const Safras       = require('../models/Safras');
const Terrenos     = require('../models/Terrenos');
const Operacoes    = require('../models/Operacoes');
const Historicos   = require('../models/Historicos');
const Gastos       = require('../models/Gastos');
const Agendas      = require('../models/agendas');
const Estoques     = require('../models/Estoques');
const Convites     = require('../models/Convites');

(async () => {
  const connection = new Sequelize(dbConfig);

  Usuarios.init(connection);
  Fazendas.init(connection);
  Funcionarios.init(connection);
  Maquinas.init(connection);
  Safras.init(connection);
  Terrenos.init(connection);
  Operacoes.init(connection);
  Historicos.init(connection);
  Gastos.init(connection);
  Agendas.init(connection);
  Estoques.init(connection);
  Convites.init(connection);


  module.exports = connection;
})().catch((error) => {
  console.error('Erro durante a sincronização dos modelos:', error);
  process.exit(1);
});
