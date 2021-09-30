CREATE DATABASE Overview


CREATE TABLE product (
	product_id serial PRIMARY KEY,
	"name" VARCHAR ( 255 ) NOT NULL,
	slogan VARCHAR ( 255 ) NOT NULL,
	description TEXT NOT NULL,
  category VARCHAR ( 50 ) NOT NULL,
  default_price DECIMAL NOT NULL,
);

CREATE TABLE features (
	feature_id serial PRIMARY KEY,
	product_id INT NOT NULL,
	feature VARCHAR ( 255 ) NOT NULL,
	value VARCHAR (255) NOT NULL
);

CREATE TABLE related_items (
	related_item_id serial PRIMARY KEY,
	product_id INT NOT NULL,
	related_product_id INT NOT NULL
);

CREATE TABLE styles (
	style_id serial PRIMARY KEY,
	product_id INT NOT NULL,
	name VARCHAR ( 255 ) NOT NULL,
	sale_price INT,
  original_price INT NOT NULL,
  default_style BOOLEAN NOT NULL
);

CREATE TABLE photos (
	photo_id serial PRIMARY KEY,
	style_id INT NOT NULL,
	url TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL
);

CREATE TABLE skus (
	sku_id serial PRIMARY KEY,
	style_id INT NOT NULL,
	size VARCHAR(50) NOT NULL,
  quantity INT NOT NULL
);


COPY product(product_id, name, slogan, description, category, default_price)
FROM '/Users/andrewhang/Documents/Hack Reactor/overview/csv/product.csv'
DELIMITER ','
CSV HEADER;

COPY features(feature_id, product_id, feature, value)
FROM '/Users/andrewhang/Documents/Hack Reactor/overview/csv/features.csv'
DELIMITER ','
CSV HEADER;

COPY related_items(related_item_id, product_id, related_product_id)
FROM '/Users/andrewhang/Documents/Hack Reactor/overview/csv/related.csv'
DELIMITER ','
CSV HEADER;

COPY styles(style_id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/andrewhang/Documents/Hack Reactor/overview/csv/styles.csv'
DELIMITER AS ','
CSV HEADER;

COPY photos(photo_id, style_id, url, thumbnail_url)
FROM '/Users/andrewhang/Documents/Hack Reactor/overview/csv/cleanPhotos.csv'
DELIMITER AS ','
CSV HEADER;


CREATE INDEX photo_style_id ON photos(style_id);
CREATE INDEX product_id ON product(product_id);
CREATE INDEX style_id on styles(style_id);
CREATE INDEX style_product_id on styles(product_id);
CREATE INDEX sku_style_id on skus(style_id);