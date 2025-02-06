import { createServer } from 'http';
//subir um servidor local para visualizar o hello world

const hostname = '127.0.0.1';
const port = 3000;
const server = createServer(
    (req,res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.write('Hello World');
        res.end();
    }
);

server.listen(port, hostname, () => {
    console.log(`servidor rodando em http://${hostname}:${port}/`);
});
