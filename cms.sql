DROP DATABASE IF EXISTS cms_db;
CREATE database cms_db;

USE cms_db;

CREATE TABLE department(
id INT NOT NULL,
name_p VARCHAR(30) NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles(
id INT NOT NULL,
title VARCHAR(30) NULL,
salary DECIMAL(10,4) NULL,
department_id INT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee(
id INT NOT NULL,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY (id)
);

SELECT * FROM department;
select * from roles;
select * from employee;