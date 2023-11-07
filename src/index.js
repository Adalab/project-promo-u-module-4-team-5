//Importar dependencias
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//Crear servidor
const app = express();

//Configurar servidor
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.set('view engine', 'ejs');

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
  // const query ='SELECT * FROM autor, projects WHERE projects.fk_autor = autor.idAutor ORDER BY idProject desc;';
  const query =
    'SELECT * FROM autor INNER JOIN projects ON projects.fk_autor = autor.idAutor ORDER BY idProject desc;';
  const [results] = await conn.query(query);
  conn.end();
  res.json({
    msj: 'todo muy bien',
    projects: results,
  });
});

app.post('/createproject', async (req, res) => {
  const body = req.body;
  console.log(body);
  const conn = await getConnection();

  const insertUser = 'INSERT INTO autor (author, image, job) values (?, ?, ?);';

  const [resultUser] = await conn.query(insertUser, [
    body.autor,
    body.image,
    body.job,
  ]);
  console.log(resultUser);

  const idNewUser = resultUser.insertId;

  const insertProject =
    'INSERT INTO projects (name, slogan, repo, demo, technologies, `desc`, photo, fk_autor) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';

  const [resultProject] = await conn.query(insertProject, [
    body.name,
    body.slogan,
    body.repo,
    body.demo,
    body.technologies,
    body.desc,
    body.photo,
    idNewUser,
  ]);

  conn.end();

  res.json({
    success: true,
    cardURL: 'http://localhost:3110/project/' + resultProject.insertId,
  });
});

app.get('/project/:idproject', async (req, res) => {
  const id = req.params.idproject;
  const selectProject =
    'SELECT * FROM autor, projects WHERE projects.fk_autor = autor.idAutor AND idproject = ?';
  const conn = await getConnection();
  const [results] = await conn.query(selectProject, [id]);
  console.log(results[0]);
  if (results.length === 0) {
    res.render('notFound');
  } else {
    res.render('detailProject', results[0]);
  }
});

const staticAppPath = './web/dist/';
app.use(express.static(staticAppPath));

const pathServerPublicStyles = './src/public-css';
app.use(express.static(pathServerPublicStyles));
