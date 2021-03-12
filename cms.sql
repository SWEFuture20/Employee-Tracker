DROP DATABASE IF EXISTS cms_db;
CREATE database cms_db;

USE cms_db;

CREATE TABLE department(
id INT NOT NULL,
name_p VARCHAR(30) NULL,
PRIMARY KEY (id)
);