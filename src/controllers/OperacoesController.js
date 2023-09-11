const Operacoes = require('../models/Operacoes');

module.exports = {
  async index(req, res) {
    const {id_safra} = req.params;
    try {
      const operacoes = await Operacoes.findAll({
        where: {
          id_safra: id_safra,
        }
      });
      return res.json(operacoes);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a lista de operacoes.'})
    }
    
  },

  async indexOne(req, res) {
    const {id} = req.params;
    try {
      const operacao = await Operacoes.findByPk(id);
      return res.json(operacao);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a operacão.'})
    }
    
  },

  async store(req, res) {
    const { id_fazenda, id_safra, id_maquina, id_terreno, id_usuario, id_maquina_vinculada, finalizada, descricao, dia_realizado, gasto_diesel } = req.body;

    const novaOperacao = await Operacoes.create({
       id_fazenda,
       id_safra,
       id_maquina,
       id_terreno,
       id_usuario,
       id_maquina_vinculada,
       finalizada,
       descricao,
       dia_realizado,
       gasto_diesel
    });

    return res.json(novaOperacao);
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { id_fazenda,
            id_safra,
            id_maquina,
            id_terreno,
            id_usuario,
            id_maquina_vinculada,
            finalizada,
            descricao,
            dia_realizado,
            gasto_diesel
          } = req.body;
    
    try {
      const operacao = await Operacoes.findByPk(id);
  
      if (!operacao) {
        return res.status(404).json({ error: 'Operacao não encontrada' });
      }

      operacao.id_fazenda   = id_fazenda;
      operacao.id_safra     = id_safra;
      operacao.id_maquina   = id_maquina;
      operacao.id_terreno   = id_terreno;
      operacao.id_usuario   = id_usuario;
      operacao.id_maquina_vinculada = id_maquina_vinculada;
      operacao.finalizada = finalizada;
      operacao.dia_realizado = dia_realizado;
      operacao.descricao    = descricao;
      operacao.gasto_diesel = gasto_diesel;
  
      await operacao.save();
  
      return res.json(operacao);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar a Operação' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const operacao = await Operacoes.findByPk(id);
  
      if (!operacao) {
        return res.status(404).json({ error: 'Operação não encontrada' });
      }
  
      await operacao.destroy();
  
      return res.json({ message: 'Operação excluída com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Operação' });
    }
  } 
};