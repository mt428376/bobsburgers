CREATE DATABASE bobsburgers_db;
USE bobsburgers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devored BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


