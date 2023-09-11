const Gastos = require('../models/Gastos');

module.exports = {
  async index(req, res) {
    const {id_safra} = req.params;
    try {
      const gastos = await Gastos.findAll({
        where: {
            id_safra: id_safra,
        }
      });
      return res.json(gastos);
    } catch (error) {
        console.log(error);
      return res.status(404).json({error: 'Não foi possivel carregar a lista de gastos.'})
    }
    
  },

  async store(req, res) {
    const { id_fazenda, id_safra, id_usuario, descricao, data_inclusao, valor } = req.body;

    const novoGasto = await Gastos.create({
       id_fazenda,
       id_safra,
       id_usuario,
       descricao,
       data_inclusao,
       valor,
    });

    return res.json({message: 'Gasto cadastrado com sucesso.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { id_fazenda,
            id_safra,
            id_usuario,
            descricao,
            data_inclusao,
            valor
          } = req.body;
    
    try {
      const gasto = await Gastos.findByPk(id);
  
      if (!gasto) {
        return res.status(404).json({ error: 'Gasto não encontrado' });
      }

      gasto.id_fazenda    = id_fazenda;
      gasto.id_safra      = id_safra;
      gasto.id_usuario    = id_usuario;
      gasto.data_inclusao = data_inclusao;
      gasto.descricao     = descricao;
      gasto.valor         = valor;
  
      await gasto.save();
  
      return res.json(gasto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar o Gasto' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const gasto = await Gastos.findByPk(id);
  
      if (!gasto) {
        return res.status(404).json({ error: 'Gasto não encontrado' });
      }
  
      await gasto.destroy();
  
      return res.json({ message: 'Gasto excluído com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Gasto' });
    }
  } 
};