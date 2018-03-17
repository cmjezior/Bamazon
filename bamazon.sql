
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(300) NOT NULL,
  department_name VARCHAR(300) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Chateau Ste. Michelle Columbia Valley Riesling 2013', 'Riesling', 10.99, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Chateau Ste. Michelle Columbia Valley Riesling 2013', 'Riesling', 59.99, 76);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Chateau Ste. Michelle Gewurztraminer 2015', 'Gewurztraminer', 10.99, 76);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hugel Gewurztraminer Jubilee 2009', 'Gewurztraminer', 47.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sonoma-Cutrer Sonoma Coast Chardonnay 2015', 'Chardonnay', 23.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Woodbridge Chardonnay 2016', 'Chardonnay', 6.09, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Kim Crawford Marlborough Sauvignon Blanc 2017', 'Sauvignon Blanc', 13.99, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Michael David Winery Sauvignon Blanc 2015', 'Sauvignon Blanc', 17.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hall Darwin Red Wine 2011', 'Syrah', 50.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Chateau Ste. Michelle Columbia Valley Syrah 2013', 'Syrah', 17.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Freemark Abbey Napa Valley Merlot 2013', 'Merlot', 32.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Buena Vista Sonoma Merlot 2012', 'Merlot', 12.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Robert Mondavi Napa Valley Cabernet Sauvignon 2014', 'Cabernet Sauvignon', 25.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('The Vegan Vine Cabernet Sauvignon 2013', 'Cabernet Sauvignon', 16.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Meiomi Pinot Noir 2016', 'Pinot Noir', 19.99, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Amity Willamette Valley Pinot Noir 2014', 'Pinot Noir', 28.99, 31);
