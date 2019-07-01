CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT,
   product_name VARCHAR(100),
   department_name VARCHAR(100),
   price INT(10),
   stock_quantity VARCHAR(100),
   PRIMARY KEY(item_id)
);

INSERT INTO users (product_name, department_name, price, stock_quantity) values ('Socks', 'clothes', '8', '100');