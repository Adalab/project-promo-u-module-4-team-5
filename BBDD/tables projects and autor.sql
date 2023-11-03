USE freedb_rocket_projects;

CREATE TABLE projects(
	idProject INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
    slogan VARCHAR(45) NOT NULL,
    repo VARCHAR(128) NOT NULL,
    demo VARCHAR(128) NOT NULL,
    technologies VARCHAR(45) NOT NULL,
    `desc` VARCHAR(128) NOT NULL,
    photo VARCHAR(1024) NOT NULL /*proyecto*/
);

CREATE TABLE autor(
	idAutor INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
    job VARCHAR(45) NOT NULL,
    image VARCHAR(1024) NOT NULL
);

-- Del día 30 de Octubre:

INSERT INTO autor(name, job, image)
VALUES 	("Irene", "Rocket Developer", "Foto de Irene"),
		("Diana", "Rocket Unicorn", "Foto de Diana"),
        ('Virginia', 'Rocket FullStack', 'foto Vir'),
        ('Raquel', 'Testing', 'foto Raquel');
        
INSERT INTO projects(name, slogan, repo, demo, technologies, `desc`, photo)
VALUES 	(	"Pepita",
			"Tu Proyecto favorito", 
            "url.repo.pepito", 
            "pepita.com", 
            "html, css",
            "",
            "photo-pepita.png"
		),
        (	"Pepita2",
			"Ahora con más pepita", 
            "url.repo.pepito2", 
            "pepita2elregreso.com", 
            "html, css, javascript",
            "solo en los mejores cines",
            "photo-pepita2.png"
		),
		(	"Women of Ink", 
			"Encuentra a tu artista ideal", 
            "www.github.com/irene/womenofink", 
            "www.womenofink.es", 
            "html, css, js, react",
            "Lorem Ipsum", 
            "Previa del proyecto"
		),
        (	"colores a mogollones",
			" dale color a tu vida",
            "GitHub.repo",
            " https",
            " JavaScript",
            " colorines para todos", 
            "imagen"
		),
        (	'Inventario Sierra',
			'Entre Bosques y Pueblos',
            'www.github.com/virchaca/inventarioPlantasSierra', 
            'www.bosquestop.com', 
            'HTML, react, scss, MySQL', 
            'tipos de bosques y sus especies', 
            'foto webforest');
            
-- DELETE FROM projects WHERE idProject BETWEEN 6 AND 9;
    
INSERT INTO projects(idProject, name, slogan, repo, demo, technologies, `desc`, photo)
VALUES 	(	6,
			"Pepita2",
			"Tu Proyecto favorito2", 
            "url.repo.pepito2", 
            "pepita.com2", 
            "html, css",
            "",
            "photo-pepita2.png"
		),
        (	7,
			'kedadas de furgonetas',
			'Aventuras sobre ruedas',
			'www.github.com/virchaca/kdds_furgo',
            'www.kdds:furgo.com',
            'HTML, JS, react, css, SQL',
            'conectar gente para viajar',
            'foto furgo');
            
INSERT INTO projects(name, slogan, repo, demo, technologies, `desc`, photo)
VALUES 	(	"Reparte gastos",
			"Reparte los gastos en tus regalos de navidad", 
            "www.github.com/irene/regalosnavidad", 
             "www.repartegastos.es",
             "html, css, js, react, mysql", 
             "Lorem Ipsum",
             "Previa del proyecto de regalos"
		);

UPDATE projects SET idProject = 8 WHERE idProject = 10; 

ALTER TABLE projects ADD COLUMN fk_autor INT;
ALTER TABLE projects ADD FOREIGN KEY(fk_autor) REFERENCES autor(idAutor);

SELECT *
FROM autor, projects
WHERE projects.fk_autor = autor.idAutor;

SELECT * FROM projects;
SELECT * FROM autor;

ALTER TABLE autor
CHANGE COLUMN name author VARCHAR(45);

