
-- aca no se recUPERA LOS DATOS PORQUE SE COMMITEARON
start transaction;
delete from northwind.contactosfake where EmployeeID =2;
COMMIT;

select * from northwind.contactosfake;
rollback;

-- ACA SI PORQUE ESTAN BAJO UN BEGIN SIN COMMIT
 BEGIN;  
delete from northwind.contactosfake where EmployeeID =3;
select * from northwind.contactosfake;
rollback;