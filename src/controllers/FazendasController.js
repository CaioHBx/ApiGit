const { where } = require('sequelize');
const Fazendas = require('../models/Fazendas');
const Usuarios = require('../models/Usuarios');
const Funcionarios = require('../models/Funcionarios');

module.exports = {

    async index(req, res){
        const fazendas = await Fazendas.findAll();
        return res.json(fazendas);
    },

    async indexOne(req, res){
      const {id} = req.params;
      const fazendas = await Fazendas.findByPk(id);
      return res.json(fazendas);
  },

    async fazendaPorUsuario(req, res){
      const {id_usuario} = req.params;
      const funcionario = await Funcionarios.findOne({
        where: {
          id_usuario: id_usuario,
        }
      })
      if (funcionario != null){
        const id_fazenda = funcionario.id_fazenda;
        const fazenda = await Fazendas.findByPk(id_fazenda);
        return res.json(fazenda);
      } else{
        return res.status(500).json({error: "Nenhuma fazenda encontrada"});
      }
      
  },

    async store(req, res){
      const { data_criacao,
              descricao,
              endereco,
              telefone,
              email,
              nome
            } = req.body;
            
      const FazendaExist = await Fazendas.findOne({ where: { email: email} });

      if (FazendaExist != null){
        return res.status(400).json({error: 'E-mail já cadastrado no sistema.'})
      } else {
        try {
          const fazenda = await Fazendas.create(
            { data_criacao,
              descricao,
              endereco,
              telefone,
              email,
              nome
            }
          );
          
          return res.status(200).json({message: 'Fazenda cadastrada com sucesso.', fazenda: fazenda});
        } catch (error) {
          return res.status(500).json({error: error});
        }
      }
    },

    async update(req, res) {
      const { id } = req.params;
      
      const { data_criacao,
              descricao,
              endereco,
              telefone,
              email,
              nome
            } = req.body;
      
      try {
        const fazenda = await Fazendas.findByPk(id);
    
        if (!fazenda) {
          return res.status(404).json({ error: 'Fazenda não encontrada' });
        }
    
        fazenda.data_criacao = data_criacao;
        fazenda.descricao    = descricao;
        fazenda.endereco     = endereco;
        fazenda.telefone     = telefone;
        fazenda.email        = email;
        fazenda.nome         = nome;
    
        await fazenda.save();
    
        return res.json(fazenda);
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar fazenda' });
      }
    },

    async delete(req, res) {
      const { id } = req.params;
    
      try {
        const fazenda = await Fazendas.findByPk(id);
    
        if (!fazenda) {
          return res.status(404).json({ error: 'Fazenda não encontrada' });
        }
    
        await fazenda.destroy();
    
        return res.json({ message: 'Fazenda excluída com sucesso' });
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir fazenda' });
      }
    }      
};
