
/* 1. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Products
○ productID, productName, QuantityPerUnit, UnitPrice
○ aplica un alias a cada uno de ellos (Codigo, Descripcion, Presentacion, PrecioUnitario)*/
SELECT productID AS 'Codigo', productName AS 'Descripcion', QuantityPerUnit AS Presentacion, UnitPrice AS 'Precio Unitario' FROM northwind.products;

/*2. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Products
○ ProductID, ProductName, QuantityPerUnit, UnitPrice
○ Aplica sobre el campo ProductName la función escalar que transforma el texto a mayúsculas*/
SELECT ProductID AS 'Codigo', UCASE(ProductName) AS Descripcion, QuantityPerUnit AS Presentacion, UnitPrice  AS 'Precio Unitario'
FROM northwind.Products;

/*3. Ejecuta una consulta de selección sobre los siguientes campos de la tabla Products
○ ProductID, ProductName, QuantityPerUnit, UnitPrice
○ aplica el mismo alias detallado en el punto uno (1)
○ Aplica sobre el campo QuantityPerUnit la función escalar de reemplazo de texto, buscando
el texto ‘boxes’ y reemplazando el mismo por ‘cajas’
○ la condición WHERE debe filtrar aquellos registros que posean en cualquier parte la palabra ‘boxes’
en cualquier parte del campo QuantityPerUni*/
SELECT productID AS Codigo, 
productName AS Descripcion, 
REPLACE(QuantityPerUnit, 'boxes', 'cajas') AS Presentacion, 
UnitPrice AS PrecioUnitario
FROM products
WHERE QuantityPerUnit LIKE '%boxes%';