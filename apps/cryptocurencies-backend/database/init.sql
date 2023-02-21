CREATE DATABASE cryptocurencies;
\connect cryptocurencies

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE assets (
    asset_id serial PRIMARY KEY,
    name VARCHAR(25) UNIQUE NOT NULL,
    abbv VARCHAR(5) UNIQUE NOT NULL
);

CREATE TABLE buys (
    buy_id INT NOT NULL,
    user_id INT NOT NULL,
    asset_id INT NOT NULL,
    date TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (user_id),
    FOREIGN KEY (asset_id)
        REFERENCES assets (asset_id)
);

CREATE TABLE sells (
    sell_id INT NOT NULL,
    user_id INT NOT NULL,
    asset_id INT NOT NULL,
    date TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (user_id),
    FOREIGN KEY (asset_id)
        REFERENCES assets (asset_id)
);

