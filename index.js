//1. Importar módulo de node
const http = require('http');

const PORT = 8080;

//2. Creacr una instancia del servidor
const app = http.createServer((request, response) => {
    response.write('Hello World');
    response.end();
});

//3. Escuchar un puerto
app.listen(PORT, () => {
    console.log(`> Servidor escuchando el puerto ${PORT}`)
});