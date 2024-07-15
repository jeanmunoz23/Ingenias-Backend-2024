select count(*) as 'Cantidad total empleados' 
from employees where Title ='Sales Representative';

select sum(Freight) 'Total de fletes' 
from orders where OrderID in (10256,10258,10260) ;

select min(UnitPrice) as precioMinimo, max(UnitPrice) precioMaximo,
 round(avg(UnitPrice),2) precioPRomedio from products;

select ProductID, ProductName, CategoryID,
UnitPrice,
round((UnitPrice * 1.20),2) VeintePorcientoOn,
(UnitPrice * 0.9) DiezPorcientoOff
from products;

select S.CompanyName, avg(p.UnitPrice) as precioPromedio
from products P
left join suppliers S on P.SupplierID = S.SupplierID
group by CompanyName;

select S.CompanyName,
count(P.ProductID) as TotalProductos
from suppliers S
join products P on P.SupplierID = S.SupplierID
group by S.CompanyName
having count(P.ProductID) >= 4;

select CategoryID,
sum(UnitPrice) as TotalProductos
from products
where UnitPrice >30
group by  CategoryID ;

select ProductID, UnitPrice,
count(*) as TotalProductos
from products
group by  ProductID,UnitPrice
having UnitPrice>30;