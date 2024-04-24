const path = require('path');
const express = require('express');
const sequelize = require('./dbConfig.js'); // Importe a configuração do banco de dados
const Artigo = require('./models/artigo.js'); // Importe o modelo do Artigo

const app = express();

app.use('/css', express.static(path.join(__dirname, 'views', 'css')));
app.use(express.json()); // Adicione o middleware para trabalhar com JSON

// Endpoint para listar artigos
app.get('/listarArtigos', async (req, res) => {
  try {
    const artigos = await Artigo.findAll(); // Busca todos os artigos do banco de dados
    res.json(artigos); // Envia os artigos como resposta em formato JSON
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    res.status(500).send('Erro ao buscar artigos');
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/views/loginPage.html'));
});

app.get("/Autor", function (req, res) {
  res.sendFile(path.join(__dirname + '/views/inicioAutor.html'));
});

app.get("/Admin", function (req, res) {
  res.sendFile(path.join(__dirname + '/views/inicioAdmin.html'));
});

app.get("/Avaliador", function (req, res) {
  res.sendFile(path.join(__dirname + '/views/inicioAvaliador.html'));
});

app.listen(3000, async () => {
  console.log("Servidor iniciado na porta 3000");

  // Sincroniza o modelo com o banco de dados
  try {
    await sequelize.sync();
    console.log('Banco de dados sincronizado');
  } catch (error) {
    console.error('Erro ao sincronizar banco de dados:', error);
  }
});