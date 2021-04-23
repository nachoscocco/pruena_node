/* const http   = require('http');
const colors = require('colors');

const handleServer = function (req, res){                               // request y response
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Hola mundo </h1>');                                  //declarativa de servidor
    res.end();
}


const server = http.createServer(handleServer);                          //creo servidor

server.listen(4200 , function(){                                         //sirvo servidor
    console.log('Servidor ejecutandose en  p:4200'.rainbow);
});

 */

const colors = require('colors')
const express = require('express')
const server = express()
const port = 3000

server.listen(port, ()=>{

 console.log('Server on port 3000'.green);
});
