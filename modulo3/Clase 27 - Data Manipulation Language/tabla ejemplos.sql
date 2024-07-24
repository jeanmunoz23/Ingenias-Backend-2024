CREATE TABLE contenido (
    id INT PRIMARY KEY,
    poster VARCHAR(255),
    titulo VARCHAR(255),
    categoria_id INT,
    genero_id INT,
    resumen TEXT,
    temporadas INT,
    trailer VARCHAR(255),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
    FOREIGN KEY (genero_id) REFERENCES genero(id)
);

CREATE TABLE actores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) UNIQUE
);

CREATE TABLE contenido_actores (
    contenido_id INT,
    actor_id INT,
    FOREIGN KEY (contenido_id) REFERENCES contenido(id),
    FOREIGN KEY (actor_id) REFERENCES actores(id),
    PRIMARY KEY (contenido_id, actor_id)
);