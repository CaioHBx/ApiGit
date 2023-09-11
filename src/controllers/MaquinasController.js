const Maquinas = require('../models/Maquinas');

module.exports = {
  async index(req, res) {
    const {id_fazenda} = req.params;
    try {
      const maquinas = await Maquinas.findAll({
        where: {
          id_fazenda: id_fazenda,
          utilizando: false,
        }
      });
      return res.json(maquinas);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a lista de máquinas.'})
    }
  },

  async indexAll(req, res) {
    const {id_fazenda} = req.params;
    try {
      const maquinas = await Maquinas.findAll({
        where: {
          id_fazenda: id_fazenda,
        }
      });
      return res.json(maquinas);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a lista de máquinas.'})
    }
  },

  async indexOne(req, res) {
    const {id} = req.params;
    try {
      const maquina = await Maquinas.findByPk(id);
      return res.json(maquina);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a máquina.'})
    }
  },

  async store(req, res) {
    const { id_fazenda, gasto_diesel, largura, velocidade, utilizando, descricao, tipo } = req.body;
    
    const novaMaquina = await Maquinas.create({
        id_fazenda,
        gasto_diesel,
        largura,
        velocidade,
        utilizando,
        descricao,
        tipo,
      });

      return res.json({message: 'Máquina cadastrada com sucesso.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { gasto_diesel,
            largura,
            velocidade,
            descricao,
            utilizando,
            tipo,
          } = req.body;
    
    try {
      const maquina = await Maquinas.findByPk(id);
  
      if (!maquina) {
        return res.status(404).json({ error: 'Máquina não encontrada' });
      }
  
      maquina.gasto_diesel = gasto_diesel;
      maquina.largura      = largura;
      maquina.velocidade   = velocidade;
      maquina.utilizando   = utilizando;
      maquina.descricao    = descricao;
      maquina.tipo         = tipo;
  
      await maquina.save();
  
      return res.json(maquina);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar a máquina' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const maquina = await Maquinas.findByPk(id);
  
      if (!maquina) {
        return res.status(404).json({ error: 'Máquina não encontrada' });
      }
  
      await maquina.destroy();
  
      return res.json({ message: 'Máquina excluída com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Máquina' });
    }
  }, 
};