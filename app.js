const path = require ('path');
const express = require ('express');

const app = express();

app.use('/css', express.static(path.join(__dirname, 'views', 'css')));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname + '/views/loginPage.html'));
});

app.get("/Autor",function(req,res){
    res.sendFile(path.join(__dirname + '/views/inicioAutor.html'));
});

app.get("/Admin",function(req,res){
    res.sendFile(path.join(__dirname + '/views/inicioAdmin.html'));
});

app.get("/Avaliador",function(req,res){
    res.sendFile(path.join(__dirname + '/views/inicioAvaliador.html'));
});

app.listen(3000,function(){
    console.log("teste")
});

