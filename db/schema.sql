DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(75) NOT NULL,
    uneaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);