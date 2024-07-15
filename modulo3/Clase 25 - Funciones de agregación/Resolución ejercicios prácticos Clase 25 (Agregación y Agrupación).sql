-- 1
SELECT COUNT(ProductID) AS TotalProductos
FROM Products
WHERE UnitPrice > 30;

-- 2
SELECT COUNT(ProductID) AS TotalProductos,
	   CategoryID
FROM Products
GROUP BY (CategoryID);

-- 3
SELECT COUNT(ProductID) AS TotalProductos,
	   CategoryID
FROM Products
GROUP BY (CategoryID)
HAVING COUNT(ProductID) > 7;


/*
1. Ejecuta una consulta de selección para obtener los campos ProductID, UnitPrice
	a. cuenta el total de Productos con el alias TotalProductos 
	b. contabiliza solo aquellos que tengan un precio superior a 30 */
    
SELECT COUNT(ProductID) AS TotalProductos
FROM Products
WHERE UnitPrice > 30;
-- otra opcion
select ProductID, UnitPrice,
count(*) as TotalProductos
from products
group by  ProductID, UnitPrice
having UnitPrice > 30;


/* 2. Ejecuta una consulta de selección para visualizar el campo ProductID, y CategoryID
	a. cuenta los productos de la tabla y muestra el resultado con el alias TotalProductos
	b. agrupa por CategoryID */

SELECT COUNT(ProductID) AS TotalProductos,
	   CategoryID
FROM Products
GROUP BY CategoryID;



/*3. Replica la consulta anterior (punto 2), y agrega la siguiente condición:
	a. muestra solo los resultados de aquellas categorías que tengan más de 7 productos
	b. TIP: (deberás utilizar HAVING en este último punto
*/

SELECT COUNT(ProductID) AS TotalProductos,
	   CategoryID
FROM Products
GROUP BY CategoryID
HAVING TotalProductos > 7;