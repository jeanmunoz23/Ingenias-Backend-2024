-- orderdetails y products.
SELECT O.OrderID, P.ProductName, O.UnitPrice, O.Quantity, (O.UnitPrice * O.Quantity) as subTotal 
FROM northwind.orderdetails O
join products P on P.ProductID = O.ProductID
group by O.OrderID, P.ProductName, O.UnitPrice, O.Quantity;

-- Orders y CustomerS.
select T1.OrderID, T2.CustomerID, T2.CompanyName, T2.ContactName, DATE(T1.ShippedDate) AS "FECHA DE LA ORDEN"
from northwind.orders AS T1
join northwind.customers T2 on T1.CustomerID = T2.CustomerID;

-- Orders, Customers y Employees.
SELECT OrderID, T2.CustomerID, companyName, T3.EmployeeID, FirstName, LastName
FROM northwind.orders   T1
join northwind.customers T2 on T1.CustomerID = T2.CustomerID
join northwind.employees T3 on T1.EmployeeID = T3.EmployeeID;

-- EJEMPLO CON GROUP BY
SELECT FirstName, LastName, count(1) AS TOTAL_ORDENS
FROM northwind.orders T1
join northwind.employees T2 on T1.EmployeeID = T2.EmployeeID
group by FirstName, LastName, T1.EmployeeID;