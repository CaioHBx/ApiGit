const express = require('express');

const UsuariosController     = require('./controllers/UsuariosController');
const FazendasController     = require('./controllers/FazendasController');
const FuncionariosController = require('./controllers/FuncionariosController');
const MaquinasController     = require('./controllers/MaquinasController');
const SafrasController       = require('./controllers/SafrasController');
const TerrenosController     = require('./controllers/TerrenosController');
const OperacoesController    = require('./controllers/OperacoesController');
const HistoricosController   = require('./controllers/HistoricosController');
const GastosController       = require('./controllers/GastosController');
const AgendasController      = require('./controllers/AgendasController');
const EstoquesController     = require('./controllers/EstoquesController');
const ConvitesController     = require('./controllers/ConvitesController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.json({ 
    message: 'Hello World' 
  });
});

// ROTAS REFERENTES A USUÁRIOS
routes.get   ('/usuarios'    , UsuariosController.index);
routes.post  ('/usuarios'    , UsuariosController.store);
routes.put   ('/usuarios/:id', UsuariosController.update);
routes.delete('/usuarios/:id', UsuariosController.delete);
routes.get   ('/usuarios/:id', UsuariosController.indexOne);

// ROTAS REFERENTES A LOGIN
routes.post  ('/login', UsuariosController.login);

// ROTAS REFERENTES A FAZENDAS
routes.get   ('/fazendas'                , FazendasController.index);
routes.get   ('/fazendaUnica/:id'       , FazendasController.indexOne);
routes.post  ('/fazendas'                , FazendasController.store);
routes.put   ('/fazendas/:id'            , FazendasController.update);
routes.delete('/fazendas/:id'            , FazendasController.delete);
routes.get   ('/fazendasUser/:id_usuario', FazendasController.fazendaPorUsuario);


// ROTAS REFERENTES A FUNCIONÁRIOS
routes.get   ('/funcionarios'    , FuncionariosController.index);
routes.get   ('/funcionarios_fazenda/:id_fazenda'    , FuncionariosController.indexFazenda);
routes.post  ('/funcionarios'    , FuncionariosController.store);
routes.delete('/funcionarios/:id', FuncionariosController.delete);

//ROTAS REFERENTES A MAQUINAS
routes.get   ('/maquinas/:id_fazenda', MaquinasController.index);
routes.get   ('/maquinasAll/:id_fazenda', MaquinasController.indexAll);
routes.post  ('/maquinas'            , MaquinasController.store);
routes.put   ('/maquinas/:id'        , MaquinasController.update);
routes.delete('/maquinas/:id'        , MaquinasController.delete);
routes.get   ('/maquinasUnica/:id'   , MaquinasController.indexOne);

//ROTAS REFERENTES A SAFRAS
routes.get   ('/safras/:id_fazenda', SafrasController.index);
routes.post  ('/safras'            , SafrasController.store);
routes.put   ('/safras/:id'        , SafrasController.update);
routes.delete('/safras/:id'        , SafrasController.delete);
routes.get   ('/safra/:id'         , SafrasController.indexOne);

//ROTAS REFERENTES A TERRENOS
routes.get   ('/terrenos/:id_fazenda'      , TerrenosController.index);
routes.get   ('/terrenosLivres/:id_fazenda', TerrenosController.indexLivres);
routes.post  ('/terrenos'                  , TerrenosController.store);
routes.put   ('/terrenos/:id'              , TerrenosController.update);
routes.delete('/terrenos/:id'              , TerrenosController.delete);
routes.get   ('/terreno/:id'               , TerrenosController.indexOne);

//ROTAS REFERENTES A OPERACOES
routes.get   ('/operacoes/:id_safra', OperacoesController.index);
routes.post  ('/operacoes'          , OperacoesController.store);
routes.put   ('/operacoes/:id'      , OperacoesController.update);
routes.delete('/operacoes/:id'      , OperacoesController.delete);
routes.get   ('/operacoesUnica/:id' , OperacoesController.indexOne);


//ROTAS REFERENTES A HISTORICOS
routes.get   ('/historicos/:id_fazenda', HistoricosController.index);
routes.post  ('/historicos'            , HistoricosController.store);
routes.put   ('/historicos/:id'        , HistoricosController.update);
routes.delete('/historicos/:id'        , HistoricosController.delete);

//ROTAS REFERENTES A GASTOS
routes.get   ('/gastos/:id_safra', GastosController.index);
routes.post  ('/gastos'          , GastosController.store);
routes.put   ('/gastos/:id'      , GastosController.update);
routes.delete('/gastos/:id'      , GastosController.delete);

//ROTAS REFERENTES A AGENDAS
routes.get   ('/agendas/:id_user', AgendasController.index);
routes.post  ('/agendas'    , AgendasController.store);
routes.put   ('/agendas/:id', AgendasController.update);
routes.delete('/agendas/:id', AgendasController.delete);

//ROTAS REFERENTES A ESTOQUES
routes.get   ('/estoques/:id_fazenda'    , EstoquesController.index);
routes.post  ('/estoques'    , EstoquesController.store);
routes.put   ('/estoques/:id', EstoquesController.update);
routes.delete('/estoques/:id', EstoquesController.delete);

//ROTAS REFERENTES A CONVITES
routes.get   ('/convites/:email', ConvitesController.index);
routes.post  ('/convites'    , ConvitesController.store);
routes.put   ('/convites/:id', ConvitesController.update);
routes.delete('/convites/:id', ConvitesController.delete);

module.exports = routes;
