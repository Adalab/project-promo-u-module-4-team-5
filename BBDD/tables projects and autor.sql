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
