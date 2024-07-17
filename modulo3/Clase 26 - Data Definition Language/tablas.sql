-- CREATE DATABASE 
CREATE DATABASE JUMP;
USE JUMP;

-- crear tabla Profesores
CREATE TABLE Profesores (
  idProfesor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombreCompleto VARCHAR(100),
  materia VARCHAR(50),
  fechaContratacion DATE,
  telefono VARCHAR(20)
);
-- crear tabla aulas
-- opcion1 
CREATE TABLE Aulas (
  idAula INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  idProfesor INT NOT NULL, 
  capacidad INT,
  FOREIGN KEY (idProfesor) REFERENCES Profesores(idProfesor)
);

-- -- opcion2 
-- CREATE TABLE Aulas (
--   idAula INT PRIMARY KEY AUTO_INCREMENT,
--   idProfesor INT,
--   capacidad INT
-- );

-- ALTER TABLE `jump`.`aulas` 
-- ADD CONSTRAINT `idProfesor`
--   FOREIGN KEY (`idProfesor`)
--   REFERENCES `jump`.`profesores` (`idProfesor`);

-- -- opcion3
-- CREATE TABLE Aulas (
--   idAula INT PRIMARY KEY AUTO_INCREMENT,
--   idProfesor INT,
--   capacidad INT,
--   CONSTRAINT `idProfesor`
--   FOREIGN KEY (`idProfesor`)
--   REFERENCES `jump`.`profesores` (`idProfesor`));

-- -- opcion 4 
-- CREATE TABLE Aulas (
--   idAula INT NOT NULL  AUTO_INCREMENT,
--   idProfesor INT NOT NULL, 
--   capacidad INT,
--   PRIMARY KEY(idAula),
--   FOREIGN KEY (idProfesor) REFERENCES Profesores(idProfesor)
-- );

-- crear tabla Estudiantes
CREATE TABLE Estudiantes (
  idEstudiante INT AUTO_INCREMENT,
  nombreCompleto VARCHAR(100),
  idAula INT,
  fechaNacimiento INT,
  direccion VARCHAR(200),
  PRIMARY KEY(idEstudiante),
  CONSTRAINT `idAula`FOREIGN KEY (idAula) REFERENCES Aulas(idAula)
);
