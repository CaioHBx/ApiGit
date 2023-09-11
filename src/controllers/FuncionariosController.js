const Funcionarios = require('../models/Funcionarios');

module.exports = {
  async index(req, res) {
    const funcionarios = await Funcionarios.findAll();
    return res.json(funcionarios);
  },

  async indexFazenda(req, res) {
    const { id_fazenda } = req.params;
    const funcionarios = await Funcionarios.findAll({
      where: {
        id_fazenda: id_fazenda,
      }
    });
    return res.json(funcionarios);
  },

  async store(req, res) {
    const { permissoes, id_usuario, id_fazenda } = req.body;

    const novoFuncionario = await Funcionarios.create({
      permissoes,
      id_usuario,
      id_fazenda
    });

    return res.json(novoFuncionario);
  },
  
  async delete(req, res) {
    const { id } = req.params;
  
    try {
      const funcionario = await Funcionarios.findByPk(id);
  
      if (!funcionario) {
        return res.status(404).json({ error: 'Funcionário não encontrado' });
      }
  
      await funcionario.destroy();
  
      return res.json({ message: 'Funcionário desvinculado da Fazenda com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir Funcionário' });
    }
  } 
};