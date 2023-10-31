//Importar dependencias
const express = require('express');
const cors = require('cors');

//Crear servidor
const server = express();

//Configurar servidor
server.use(cors());
server.use(express.json({ limit: '25mb' }));

//Puerto del servidor

const serverPort = 3110;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/', function (req, res) {
  res.send('Hello Mundo!');
});

const staticServerPath = './web';
server.use(express.static(staticServerPath));
