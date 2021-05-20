const http = require('http');
const fs = require('fs');

const PORT = 8080;

const app = http.createServer((request, response) => {
    fs.readFile('./index.html', 'utf-8', (err, text) => {
        response.writeHead(200,{
            'Content-Type':'text/html'
        });
        response.write(text);
        response.end();
    });
});

app.listen(PORT, () => {
    console.log(`> Servidor escuchando el puerto ${PORT}`)
});