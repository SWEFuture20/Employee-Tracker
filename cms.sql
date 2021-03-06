DROP DATABASE IF EXISTS cms_db;
CREATE database cms_db;

USE cms_db;

CREATE TABLE department(
id INT AUTO_INCREMENT,
name_p VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles(
id INT AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,4) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee(
id INT AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL,
PRIMARY KEY (id)
);

SELECT * FROM department;
select * from roles;
select * from employee;