-- CREATE TABLE categories(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar(50)
-- );

-- INSERT INTO categories VALUES 
-- (DEFAULT, 'BBQ'),
-- (DEFAULT, 'Gluten-Free'),
-- (DEFAULT, 'Mexican'),
-- (DEFAULT, 'Tapas'),
-- (DEFAULT, 'Greek'),
-- (DEFAULT, 'Chinese'),
-- (DEFAULT, 'Ethopian'),
-- (DEFAULT, 'Indian'),
-- (DEFAULT, 'Thai'),
-- (DEFAULT, 'Vietnamese'),
-- (DEFAULT, 'German');

CREATE TABLE restaurants (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(100), 
    category integer REFERENCES categories(id),
    food_description varchar(300),
    price integer,
    course varchar(50),
    img_URL varchar(150)
);

-- INSERT INTO restaurants (name, category, food_description, price, course, img_URL) VALUES ()