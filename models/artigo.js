const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig.js'); // Importe a configuração do banco de dados

const Artigo = sequelize.define('Artigo', {
  titulo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_autor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'submetido',
    validate: {
      isIn: [['submetido', 'em_avaliacao', 'publicado', 'rejeitado']],
    },
  },
  data_criacao: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

(async () => {
  try {
    await sequelize.authenticate(); // Verifica se a conexão com o banco de dados está funcionando
    console.log('Conexão com o banco de dados estabelecida');

    // Sincroniza o modelo com o banco de dados (cria a tabela se não existir)
    await Artigo.sync();
    console.log('Modelo de Artigo sincronizado com o banco de dados');

    // Executa o SQL para buscar todos os artigos inseridos manualmente
    const [results] = await sequelize.query(`
      SELECT * FROM artigos;
    `);
    console.log('Artigos encontrados:', results);
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
  } 
  
})(); 
module.exports = Artigo