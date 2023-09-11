const Convites = require('../models/Convites');

module.exports = {
  async index(req, res) {
    const {email} = req.params;
    try {
      const convites = await Convites.findAll({
        where: {
          email_usuario_destinatario: email,
          lido: false,
        }
      });
      return res.json(convites);
    } catch (error) {
        console.log(error);
      return res.status(404).json({error: 'Não foi possivel carregar a lista de convites.'})
    }
    
  },

  async store(req, res) {
    const { id_fazenda, email_usuario_remetente, email_usuario_destinatario, descricao, permissoes, lido } = req.body;
    
    const novoConvite = await Convites.create({
        id_fazenda,
        email_usuario_remetente,
        email_usuario_destinatario,
        descricao,
        permissoes,
        lido,
      });

      return res.json({message: 'Convite feito.'});
  },

  async update(req, res) {
    const { id } = req.params;
    
    const { id_fazenda,
            email_usuario_remetente,
            email_usuario_destinatario,
            descricao,
            permissoes,
            lido,
          } = req.body;
    
    try {
      const convite = await Convites.findByPk(id);
  
      if (!convite) {
        return res.status(404).json({ error: 'Convite não encontrado' });
      }
  
      convite.id_fazenda                 = id_fazenda;
      convite.email_usuario_remetente    = email_usuario_remetente;
      convite.email_usuario_destinatario = email_usuario_destinatario;
      convite.descricao                  = descricao;
      convite.permissoes                 = permissoes;
      convite.lido                       = lido;
  
      await convite.save();
  
      return res.json(convite);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar o Convite' });
    }
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const convite = await Convites.findByPk(id);
  
      if (!convite) {
        return res.status(404).json({ error: 'Convite não encontrado' });
      }
  
      await convite.destroy();
  
      return res.json({ message: 'Convite excluído com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Convite' });
    }
  }, 
};