const Agendas = require('../models/agendas');

module.exports = {
  async index(req, res) {
    const { id_user } = req.params;
    try {
      const agendas = await Agendas.findAll({
        where: {
          id_usuario: id_user,
        }
      });
      return res.json(agendas);
    } catch (error) {
        console.log(error);
      return res.status(404).json({error: 'Não foi possivel carregar a lista de atividades.'})
    }
    
  },

  async store(req, res) {
    const { id_fazenda, id_operacao, id_usuario, descricao, dia_concluido, finalizada } = req.body;

    const novaAgenda = await Agendas.create({
       id_fazenda,
       id_operacao,
       id_usuario,
       descricao,
       dia_concluido,
       finalizada,
    });

    return res.json({message: 'Agenda cadastrada com sucesso.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { id_fazenda,
            id_operacao,
            id_usuario,
            descricao,
            dia_concluido,
            finalizada,
          } = req.body;
    
    try {
      const agenda = await Agendas.findByPk(id);
  
      if (!agenda) {
        return res.status(404).json({ error: 'Agenda não encontrada' });
      }

      agenda.id_fazenda    = id_fazenda;
      agenda.id_operacao   = id_operacao;
      agenda.id_usuario    = id_usuario;
      agenda.dia_concluido = dia_concluido;
      agenda.finalizada    = finalizada;
      agenda.descricao     = descricao;
  
      await agenda.save();
  
      return res.json(agenda);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar Agenda' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const agenda = await Agendas.findByPk(id);
  
      if (!agenda) {
        return res.status(404).json({ error: 'Agenda não encontrada' });
      }
  
      await agenda.destroy();
  
      return res.json({ message: 'Agenda excluída com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Agenda' });
    }
  } 
};