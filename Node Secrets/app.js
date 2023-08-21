require('dotenv').config('./.env');

// const NODE_ENV= 'apples';

console.log(process.env.NODE_ENV);

const http = require('http');
const hostname = process.env.Hostname;
const port = process.env.Port;

const fs = require('fs');
let directory_name = './';
let filenames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) =>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    f = ''
    filenames.forEach((file)=>{
    f = f +file+ "\n"
})
   res.end(f)
})

server.listen(port, hostname, ()=> {

})









    