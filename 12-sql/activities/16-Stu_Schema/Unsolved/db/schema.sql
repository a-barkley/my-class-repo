-- Write your schema here --
DROP DATABASE IF EXISTS items;
CREATE DATABASE items;

USE items;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    in_stock BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
    id INT NOT NULL,
    category_name VARCHAR(30) NOT NULL
);

INSERT INTO categories ( id, category_name)
VALUES 
    (001, 'something'),
    (002, 'example2'),
    (003, 'example3');

SELECT * FROM categories;

UPDATE categories
SET id = 5
WHERE id = 1;

SELECT * FROM 5 IN categories;