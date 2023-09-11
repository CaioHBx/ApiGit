const Terrenos = require('../models/Terrenos');

module.exports = {
  async index(req, res) {
    const {id_fazenda} = req.params;
    try {
      const terrenos = await Terrenos.findAll({
        where: {
          id_fazenda: id_fazenda,
        }
      });
      return res.json(terrenos);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a lista de terrenos.'})
    }
    
  },

  async indexOne(req, res) {
    const {id} = req.params;
    try {
      const terreno = await Terrenos.findByPk(id);
      return res.json(terreno);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar o terreno.'})
    }
    
  },

  async indexLivres(req, res) {
    const {id_fazenda} = req.params;
    try {
      const terrenos = await Terrenos.findAll({
        where: {
          id_fazenda: id_fazenda,
          utilizando: false,
        }
      });
      return res.json(terrenos);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a lista de terrenos.'})
    }
    
  },

  async store(req, res) {
    const { id_fazenda, tamanho, descricao, utilizando } = req.body;

    const novoTerreno = await Terrenos.create({
       id_fazenda,
       tamanho,
       descricao,
       utilizando,
    });

    return res.json({message: 'Terreno cadastrado com sucesso.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { id_fazenda,
            tamanho,
            descricao,
            utilizando,
          } = req.body;
    
    try {
      const terreno = await Terrenos.findByPk(id);
  
      if (!terreno) {
        return res.status(404).json({ error: 'Terreno não encontrada' });
      }

      terreno.id_fazenda = id_fazenda;
      terreno.tamanho    = tamanho;
      terreno.descricao  = descricao;
      terreno.utilizando = utilizando;
  
      await terreno.save();
  
      return res.json(terreno);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar o Terreno' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const terreno = await Terrenos.findByPk(id);
  
      if (!terreno) {
        return res.status(404).json({ error: 'Terreno não encontrado' });
      }
  
      await terreno.destroy();
  
      return res.json({ message: 'Terreno excluído com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Terreno' });
    }
  } 
};