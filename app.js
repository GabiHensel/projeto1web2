const path = require ('path');
const express = require ('express');

const app = express();

app.use('/css', express.static(path.join(__dirname, 'views', 'css')));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname + '/views/loginPage.html'));
});

app.listen(3000,function(){
    console.log("teste")
});

