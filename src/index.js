//Importar dependencias
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise')

//Crear servidor
const app = express();

//Configurar servidor
app.use(cors());
app.use(express.json({ limit: '25mb' }));

async function getConnection() {
  //crear y configurar la conexión.
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_rocketadmin',
    password: 'xvzNgcE4V3@F5dg',
    database: 'freedb_rocket_projects',
  });
  connection.connect();
return connection;
}
//Puerto del servidor

const appPort = 3110;
app.listen(appPort, () => {
  console.log(`Server listening at http://localhost:${appPort}`);
});

//Endpoint para todos los proyectos
app.get('/listproject', async (req, res) => {
  const conn = await getConnection();  
  const query = 'SELECT * FROM autor, projects WHERE projects.fk_autor = autor.idAutor ORDER BY idProject desc;';
  const [results] = await conn.query(query);
  conn.end();
  res.json({
    msj: 'todo muy bien',
    projects: results,
  });
});
/*
// POST
app.post('/api/create-projects', async (req, res) => {
  const conn = await getConnection();  
  const query = 'INSERT INTO projects(name, slogan, repo, demo, technologies, `desc`, photo)VALUES ("Pepita","Tu Proyecto favorito","url.repo.pepito","pepita.com","html, css","","photo-pepita.png")';
  const [results] = await conn.query(query);
  conn.end();
  res.json({
    msj: 'Esto va bien',
    projects: results,
  });
});
*/
const staticAppPath = './web/dist/';
app.use(express.static(staticAppPath));
