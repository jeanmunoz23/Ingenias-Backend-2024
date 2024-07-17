-- CREATE SCHEMA
CREATE SCHEMA `basededatos` DEFAULT CHARACTER SET utf8 ;

-- CREATE TABLE
CREATE TABLE `basededatos`.`amigos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(30) NOT NULL,
  `apellido` VARCHAR(30) NULL,
  `email` VARCHAR(50) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`id`));

-- ALTER TABLE
ALTER TABLE `basededatos`.`amigos` 
ADD COLUMN `telefono` VARCHAR(30) NULL;
ALTER TABLE `basededatos`.`amigos` 
ADD fechaNacimiento DATE; 

-- OJO SIEMPRE DE MENOS A MAS CON  LOS CAMBIOS

ALTER TABLE `basededatos`.`amigos` 
CHANGE COLUMN `email` `email` VARCHAR(50) NULL DEFAULT 'N/A' ;

ALTER TABLE `basededatos`.`amigos` 
CHANGE COLUMN `fechaNacimiento` `fecha_Nacimiento` VARCHAR(30) NULL DEFAULT NULL ;

ALTER TABLE `basededatos`.`amigos` 
MODIFY `telefono` VARCHAR(50) NULL;

ALTER TABLE `basededatos`.`amigos` 
DROP COLUMN `amigoscol`;

-- ANTES DE CAMBIAR NOMBRE
SELECT * FROM  `basededatos`.`amigos`; 
ALTER TABLE `basededatos`.`amigos` 
RENAME TO  `basededatos`.`BBF` ;

-- DESPUES DE CAMBIAR NOMBRE
SELECT * FROM basededatos.bbf;
SELECT * FROM  `basededatos`.`amigos`;
ALTER TABLE `basededatos`.`BBF` 
RENAME TO  `basededatos`.`amigos` ;