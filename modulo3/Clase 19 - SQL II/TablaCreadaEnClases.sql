/*CREO EL ESQUEMA/DATABASE */
CREATE DATABASE `ecommers`;

/* SELECCIONO EL USO DEL ESQUEMA/DATABASE */
use `ecommers`;

/*CREO UNA TABLA */
CREATE TABLE `contactospersonales` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `NombreCompleto` varchar(50) NOT NULL,
  `Telefono` varchar(12) NOT NULL DEFAULT '0',
  `TipoDeTelefono` varchar(10) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
);

/* MUESTRO EL CONTENIDO DE LA TABLA */
SELECT * FROM ecommers.contactospersonales;