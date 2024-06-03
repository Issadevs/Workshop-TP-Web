CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `products` (`id`, `name`, `description`, `price`) VALUES
(1, 'Laptop', 'A high-performance laptop for gaming and work', 999.99),
(2, 'Smartphone', 'A latest model smartphone with advanced features', 699.99),
(3, 'Headphones', 'Noise-cancelling over-ear headphones', 199.99),
(4, 'Smartwatch', 'A smartwatch with health tracking features', 249.99),
(5, 'Tablet', 'A lightweight tablet perfect for reading and browsing', 299.99),
(6, 'Camera', 'A DSLR camera with high resolution', 499.99),
(7, 'Printer', 'A color printer with wireless connectivity', 149.99),
(8, 'Monitor', 'A 27-inch 4K monitor for professionals', 399.99),
(9, 'Keyboard', 'A mechanical keyboard with RGB lighting', 129.99),
(10, 'Mouse', 'An ergonomic mouse with customizable buttons', 89.99),
(11, 'Speaker', 'A portable Bluetooth speaker with excellent sound quality', 59.99);
