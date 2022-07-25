-- Write your Schema Here -- 

DROP DATABASE IF EXISTS stuff;
CREATE DATABASE stuff;

USE stuff;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customer_order (
    id INT NOT NULL,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);

INSERT INTO customers (first_name, last_name)
VALUES 
    ('Pat', 'Barkley'),
    ('Something', 'Lastname'),
    ('FirstName', 'Something');

INSERT INTO customer_order (first_name, last_name)
VALUES 
    ('Pat', 'Barkley'),
    ('Something', 'Lastname'),
    ('FirstName', 'Something');

SELECT * FROM customer_order;


