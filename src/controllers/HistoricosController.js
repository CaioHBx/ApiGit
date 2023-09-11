const Historicos = require('../models/Historicos');

module.exports = {
  async index(req, res) {
    const {id_fazenda} = req.params;
    try {
      const historicos = await Historicos.findAll({
        where: {
          id_fazenda: id_fazenda,
        }
      });
      return res.json(historicos);
    } catch (error) {
      return res.status(404).json({error: 'Não foi possivel cadastrar o Histórico.'})
    }
  },

  async store(req, res) {
    const { id_fazenda, id_safra, lucro, peso_colhido_met_quad, peso_colhido_total
          , valor_saca_venda, descricao_geral, dia_finalizado } = req.body;
    
    const novoHistorico = await Historicos.create({
        id_fazenda,
        id_safra, 
        lucro, 
        peso_colhido_met_quad, 
        peso_colhido_total, 
        valor_saca_venda, 
        descricao_geral,
        dia_finalizado, 
      });

      return res.json({message: 'Histórico cadastrado com sucesso.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { id_fazenda,
            id_safra, 
            lucro, 
            peso_colhido_met_quad, 
            peso_colhido_total, 
            valor_saca_venda, 
            descricao_geral,
            dia_finalizado, 
          } = req.body;
    
    try {
      const historico = await Historicos.findByPk(id);
  
      if (!historico) {
        return res.status(404).json({ error: 'Histórico não encontrado' });
      }

      historico.id_fazenda            = id_fazenda;
      historico.id_safra              = id_safra;
      historico.lucro                 = lucro;
      historico.peso_colhido_met_quad = peso_colhido_met_quad;
      historico.peso_colhido_total    = peso_colhido_total;
      historico.valor_saca_venda      = valor_saca_venda;
      historico.descricao_geral       = descricao_geral;
      historico.dia_finalizado        = dia_finalizado;
  
      await historico.save();
  
      return res.json(historico);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar o Histórico' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const historico = await Historicos.findByPk(id);
  
      if (!historico) {
        return res.status(404).json({ error: 'Histórico não encontrado' });
      }
  
      await historico.destroy();
  
      return res.json({ message: 'Histórico excluído com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Histórico' });
    }
  }, 
};