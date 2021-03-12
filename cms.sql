DROP DATABASE IF EXISTS cms_db;
CREATE database cms_db;

USE cms_db;

CREATE TABLE department(
id INT NOT NULL,
name_p VARCHAR(30) NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(
id INT NOT NULL,
title VARCHAR(30) NULL,
salary DECIMAL(10,4) NULL,
department_id INT NULL,
PRIMARY KEY (id)
);