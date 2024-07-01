-- 1
SELECT * FROM Customers
WHERE City = 'Buenos Aires';

-- 2
SELECT customerID, CompanyName, ContactName, ContactTitle FROM Customers
WHERE City = 'London';

-- 3
SELECT * FROM Northwind.Employees
WHERE Title = 'Sales Representative'
ORDER BY City DESC;

-- 4
SELECT LastName, FirstName, Title, City FROM Northwind.Employees
WHERE Country = 'USA'
ORDER BY LastName;

-- 5
SELECT SupplierID, CompanyName, ContactName FROM Suppliers
WHERE ContactTitle = 'Accounting Manager';


-- ejercicios de operadores

Select * from northwind.products Where Discontinued;

Select * from northwind.products Where not Discontinued;

SELECT ProductID, ProductName, Discontinued FROM northwind.products where Discontinued is not true;

SELECT ProductID, ProductName, Discontinued FROM northwind.products where Discontinued = true;

SELECT ProductID, ProductName, Discontinued FROM northwind.products where Discontinued != true;

SELECT ProductID, ProductName, Discontinued FROM northwind.products where Discontinued is  true;

SELECT ProductID, ProductName, Discontinued FROM northwind.products where Discontinued =1 ;
