const Estoques = require('../models/Estoques');

module.exports = {
  async index(req, res) {
    const { id_fazenda } = req.params;
    try {
      const estoques = await Estoques.findAll({
        where: {
          id_fazenda: id_fazenda,
        }
      });
      return res.json(estoques);
    } catch (error) {
        console.log(error);
      return res.status(404).json({error: 'Não foi possivel carregar a lista de estoque.'})
    }
    
  },

  async store(req, res) {
    const { id_fazenda, id_usuario, descricao, valor_unitario, quantidade } = req.body;

    const novoEstoque = await Estoques.create({
       id_fazenda,
       id_usuario,
       descricao,
       valor_unitario,
       quantidade,
    });

    return res.json({message: 'Estoque cadastrado com sucesso.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { id_fazenda,
            id_usuario,
            descricao,
            valor_unitario,
            quantidade,
          } = req.body;
    
    try {
      const estoque = await Estoques.findByPk(id);
  
      if (!estoque) {
        return res.status(404).json({ error: 'Estoque não encontrado' });
      }

      estoque.id_fazenda     = id_fazenda;
      estoque.id_usuario     = id_usuario;
      estoque.descricao      = descricao;
      estoque.valor_unitario = valor_unitario;
      estoque.quantidade     = quantidade;
  
      await estoque.save();
  
      return res.json(estoque);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar o Estoque' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const estoque = await Estoques.findByPk(id);
  
      if (!estoque) {
        return res.status(404).json({ error: 'Estoque não encontrado' });
      }
  
      await estoque.destroy();
  
      return res.json({ message: 'Estoque excluído com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Estoque' });
    }
  } 
};