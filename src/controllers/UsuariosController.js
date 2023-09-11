const Usuarios = require('../models/Usuarios');

module.exports = {

    async index(req, res){
      const usuarios = await Usuarios.findAll();
      return res.json(usuarios);
    },

    async indexOne(req, res){
      const { id } = req.params;
      const usuario = await Usuarios.findByPk(id);
      return res.json(usuario);
    },

    async store(req, res){
      const { nome, email, senha} = req.body;

      const userExist = await Usuarios.findOne({ where: { email: email} });

      if (userExist != null){
        return res.status(400).json({error: 'E-mail já cadastrado no sistema.'})
      } else {
        try {
          await Usuarios.create({ nome, email, senha });
          return res.status(200).json({message: 'Usuario cadastrado com sucesso.'});
        } catch (error) {
          return res.status(500).json({error: error});
        }
      }
    },

    async login(req, res){
      const {email, senha} = req.body;
      
      const userExist = await Usuarios.findOne({ where: { email: email} });

      if (userExist == null){
        return res.status(404).json({ error: 'E-mail não cadastrado no sistema.' });
      } else {
        if (userExist.dataValues.senha == senha){
          return res.json(userExist)
        } else {
          return res.status(404).json({ error: 'Senha incorreta.' });
        }
      }
    },

    async update(req, res) {
      const { id } = req.params;
      const { nome, email, senha } = req.body;

      try {
        const usuario = await Usuarios.findByPk(id);

        if (!usuario) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        usuario.nome  = nome;
        usuario.email = email;
        usuario.senha = senha;

        await usuario.save();

        return res.json(usuario);
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
      }
    },

  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const usuario = await Usuarios.findByPk(id);
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      await usuario.destroy();
  
      return res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  } 
};
