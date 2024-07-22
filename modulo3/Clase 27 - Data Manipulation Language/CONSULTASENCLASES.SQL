SELECT `EmployeeID`,`LastName`,`FirstName`,`Title`,`HomePhone`,`City` FROM Northwind.Employees;
CREATE table ContactosFake as 
SELECT `EmployeeID`,`LastName`,`FirstName`,`Title`,`HomePhone`,`City` FROM Northwind.Employees ;

-- INDIVIDUAL
update `ContactosFake` set `City` = 'Seattle' WHERE EmployeeID = 10;
-- 1-Actualiza en ContactosFake aquellos contactos que estén en la Ciudad de ‘Seattle’ por ‘CABA’ (MASIVO)
update `ContactosFake` set `City` = 'CABA' WHERE City LIKE 'Seattle';
-- 2. Actualiza en ContactosFake el empleado cuyo ID es 5, su campo Título por el de ‘Gerente de Ventas’ (INDIVIDUAL)
update `ContactosFake` set `Title` = 'Gerente de Ventas' WHERE EmployeeID = 5;
-- 3. Actualiza en ContactosFake el campo Título por ‘Analista de Ventas’ para los empleados cuyo ID sean: 1, 3, 4, 6, 7, 9 (MASIVO)
update `ContactosFake` set `Title` = 'Analista de Ventas' WHERE EmployeeID IN (1, 3, 4, 6, 7, 9);


-- INSERT EN CONTACTOSFAKE LastName FirstName Title HomePhone City
-- MASIVA PARCIAL
INSERT INTO `ContactosFake` (LastName, FirstName, Title, HomePhone, City)
VALUES ('Sandberg','Sheryl','COO @ Facebook', '11-555-9999', 'Menlo Park'),
('Wojcicki', 'Susan', 'CEO @ Youtube', '11-555-2222', 'San Bruno');
-- MASIVA IMPLICITOS LOS CAMPOS DE LA TABLA
INSERT INTO `ContactosFake` 
VALUES (NULL, 'Sandberg','Sheryl','COO @ Facebook', '11-555-9999', 'Menlo Park'),
(NULL,'Wojcicki', 'Susan', 'CEO @ Youtube', '11-555-2222', 'San Bruno');

-- INDIVIDUAL IMPLICITO
INSERT INTO `ContactosFake` 
VALUES (NULL,'Rometty', 'Ginni', 'EX CEO @ IBM', '11-555-5555', 'Armonk');
-- INDIVIDUAL PARCIAL
INSERT INTO `ContactosFake`  (LastName, FirstName, Title, HomePhone, City)
VALUES ('Rometty', 'Ginni', 'EX CEO @ IBM', '11-555-5555', 'Armonk');

-- DELETE
DELETE FROM jump.profesores WHERE idProfesor = 1;

-- TRUNCATE
TRUNCATE northwind.contactosfake;