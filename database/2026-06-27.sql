-- clear data
truncate table "order", customer, product restart identity;


-- PRODUCT
insert into product(name, price, is_active)
values
    ('iPhone 15', 20000000, true),
    ('Macbook Pro', 50000000, true),
    ('Old Laptop', 10000000, false);


-- CUSTOMER
insert into customer(name, is_active)
values
    ('Nguyen Van A', true),   -- id 1
    ('Tran Van B', true),     -- id 2
    ('Le Van C', false);      -- id 3


-- ORDER
insert into "order"
(customer_id, product_id, created_by, is_active)
values
    (1, 1, 100, true),        -- A mua iphone

    (1, 2, 100, true),        -- A mua macbook

    (2, 1, 100, true),        -- B mua iphone

    (3, 2, 100, false),       -- C bị disable nhưng vẫn có order

    (99, 1, 100, true);       -- customer không tồn tại