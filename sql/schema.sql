DROP DATABASE IF EXISTS brawndo_db;
CREATE DATABASE brawndo_db;
USE brawndo_db;

CREATE TABLE plants(
id INT NOT NULL AUTO_INCREMENT,
plant_name VARCHAR(100) NOT NULL,
outdoor BOOLEAN NOT NULL,
indoor BOOLEAN NOT NULL,
water_frequency INT NOT NULL,
water_times INT NOT NULL,
);
