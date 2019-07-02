USE Bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES
('Socks', 'Clothes & Accessories', 8.00, 100),
 ('Gold Chain', 'Clothes & Accessories', 100.00, 25),
 ('TV', 'Electronics', 300.00, 10),
 ('Authentic Lightsaber', 'Self Defense', 5000.00, 2),
 ('Tom Brady', 'Starting Quarterbacks', 100,000,000.00, 1),
 ('Xbox One X', 'Electronics', 500.00, 50),
 ('Magic Beans', 'Home & Garden', 1.00, 1000),
 ('Sensu Beans', 'Home & Garden', 5.00, 5000),
 ('Canteen', 'Lifestyle & Fitnesss', 10.00, 25),
 ('Mystery Box', 'Loot Boxes', 5.00, 1000),
 ('Summer Box', 'Loot Boxes', 5.00, 1000);
 
SELECT * FROM products;