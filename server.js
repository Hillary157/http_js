const http = require('http');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');//verificador de objetos

app.use(bodyParser.json());
const porta = 3000;
app.set('port', porta);
app.get("/teste", (req, resp, next) => {
    resp.send("Bom dia !");
});

const clientes=[
    {
        id:1,
        nome:'Ana',
        email:'ana@email.com'
    },
    {
        id:2,
        nome:'Cristina',
        email:'cristina@email.com'
    }
]


app.get('/clientes', (req, resp, next) => {
    resp.json(clientes);
});


let contador = 3;
//função que insere clientes
app.post('/clientes',(req,res,next) =>{
    const cliente = req.body;
    clientes.push({id:contador += 1, nome: cliente.nome, email: cliente.email});
    console.log(clientes);
    //res.end();
    res.status(201).json(clientes);
})

const server = http.createServer(app);
server.listen(porta);