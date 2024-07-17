Si utilizas la palabra clave CONSTRAINT obligatoriamente tienes que pasarle un parámetro indicando el nombre de esa restricción. Sin embargo, si no usas CONSTRAINT, el motor de base de datos le pone el nombre a la restricción de forma automática.

Una ventaja es que puedes ponerle el nombre que tu quieras, por si luego tienes que hacer algo con esa restricción y así puedas identificarla fácilmente.

Un inconveniente es que ese nombre no puede estar duplicado, por lo que tendrías que tener control de qué nombre le pones para no repetirlo.

Más info:

https://dev.mysql.com/doc/refman/8.0/en/create-table.html#create-table-indexes-keys