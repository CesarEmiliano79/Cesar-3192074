CREATE DATABASE llaveros;
USE llaveros;
CREATE TABLE datos (
    id            INTEGER AUTO_INCREMENT NOT NULL,
    idPedido      INTEGER NOT NULL,
    codigo        INTEGER NOT NULL,
    modelo        VARCHAR(255) NOT NULL,
    precioT       DECIMAL(10, 2) NOT NULL,
    completo      BOOLEAN NOT NULL,
    cliente       VARCHAR(255) NOT NULL,
    fechaEntrega  DATE,                      -- También almacena solo la fecha
    PRIMARY KEY (id)
);