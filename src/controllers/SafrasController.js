const Safras = require('../models/Safras');

module.exports = {
  async index(req, res) {
    const {id_fazenda} = req.params;
    try {
      const safras = await Safras.findAll({
        where: {
          id_fazenda: id_fazenda,
          finalizada: false,
        }
      });
    return res.json(safras);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a lista de safras.'})
    }
  },

  async indexOne(req, res) {
    const {id} = req.params;
    try {
      const safra = await Safras.findByPk(id);
    return res.json(safra);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel carregar a safra.'})
    }
  },

  async store(req, res) {
    const { 
       id_fazenda,
       id_terreno,
       descricao,
       cultura,
       data_expectativa_colheita,
       finalizada,
       data_inicio,
       gastos_totais,
       orcamento_total,
     } = req.body;

    const novaSafra = await Safras.create({
      id_fazenda,
      id_terreno,
      descricao,
      cultura,
      data_expectativa_colheita,
      finalizada,
      data_inicio,
      gastos_totais,
      orcamento_total,
    });

    return res.json({message: 'Safra cadastrada com sucesso.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { descricao,
            cultura,
            data_expectativa_colheita,
            finalizada,
            data_inicio,
            gastos_totais,
            orcamento_total,
          } = req.body;
    
    try {
      const safra = await Safras.findByPk(id);
  
      if (!safra) {
        return res.status(404).json({ error: 'Safra não encontrada' });
      }

      safra.descricao                 = descricao;
      safra.cultura                   = cultura;
      safra.data_expectativa_colheita = data_expectativa_colheita;
      safra.finalizada                = finalizada;
      safra.data_inicio               = data_inicio;
      safra.gastos_totais             = gastos_totais;
      safra.orcamento_total           = orcamento_total;
  
      await safra.save();
  
      return res.json(safra);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar a safra' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const safra = await Safras.findByPk(id);
  
      if (!safra) {
        return res.status(404).json({ error: 'Safra não encontrada' });
      }
  
      await safra.destroy();
  
      return res.json({ message: 'Safra excluída com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Safra' });
    }
  } 
};