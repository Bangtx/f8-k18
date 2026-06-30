drop table  if exists customer;

create table if not exists customer (
                                        id bigserial primary key, -- bigint + auto insert
                                        name text,
                                        created_at timestamptz default now(),
    created_by bigint,
    updated_at timestamptz,
    updated_by bigint,
    deleted_at timestamptz,
    deleted_by bigint,
    is_active boolean default true
    );

drop table if exists product;

create table if not exists product (
                                       id bigserial primary key,
                                       name text,
                                       price int,
                                       created_at timestamptz default now(),
    created_by bigint,
    updated_at timestamptz,
    updated_by bigint,
    deleted_at timestamptz,
    deleted_by bigint,
    is_active boolean default true
    );

INSERT INTO customer (name, created_by)
VALUES
    ('Nguyễn Văn A', 1),
    ('Trần Thị B', 1),
    ('Lê Văn C', 2),
    ('Phạm Thị D', 1);

INSERT INTO product (name, price, created_by)
VALUES
    ('Laptop Dell XPS 15', 35000000, 1),
    ('Điện thoại iPhone 15 Pro', 28000000, 1),
    ('Tai nghe Sony WH-1000XM5', 7500000, 2),
    ('Bàn phím cơ Keychron K2', 1800000, 2);

drop table "order";
create table "order" (
                         id bigserial primary key,
                         customer_id bigint,
                         discount_percent int,
                         created_at timestamptz default now(),
                         created_by bigint,
                         updated_at timestamptz,
                         updated_by bigint,
                         deleted_at timestamptz,
                         deleted_by bigint,
                         is_active boolean default true
);

drop table "order_detail";
create table "order_detail" (
                                id bigserial primary key,
                                order_id bigint,
                                product_id bigint,
                                quantity int,
                                created_at timestamptz default now(),
                                created_by bigint,
                                updated_at timestamptz,
                                updated_by bigint,
                                deleted_at timestamptz,
                                deleted_by bigint,
                                is_active boolean default true
);

INSERT INTO "order" (customer_id, created_by, discount_percent)
VALUES
    (1, 1, 3), -- Đơn hàng số 1 (do khách hàng ID = 1 đặt)
    (2, 2, 5); -- Đơn hàng số 2 (do khách hàng ID = 2 đặt)

INSERT INTO order_detail (order_id, product_id, quantity, created_by)
VALUES
    -- Chi tiết cho Đơn hàng số 1: Mua 1 Laptop và 2 Bàn phím
    (1, 1, 1, 1),  -- 1 cái Laptop Dell (Product ID = 1), giảm giá 0%
    (1, 4, 2, 1),  -- 2 cái Bàn phím Keychron (Product ID = 4), giảm giá 5%

    -- Chi tiết cho Đơn hàng số 2: Mua 1 chiếc iPhone
    (2, 2, 1, 2); -- 1 cái iPhone 15 Pro (Product ID = 2), giảm giá 10%

-- id     customer                            details                                              amount
-- 1      {id: 1, name: 'Nguyễn Văn A'}       [{id: 1, product: {id: 1, name: Laptop Dell}}]       20.000.000

select
    "order".id,
    json_build_object(
            'id', customer.id, 'name', customer.name
    ) as customer,
    json_agg(
            json_build_object(
                    'id', order_detail.id,
                    'product', product.name
            )
    ) as details
from "order"
         join customer on "order".customer_id = customer.id
         join order_detail on "order".id = order_detail.order_id
         join product on order_detail.product_id = product.id
where "order".is_active and order_detail.is_active and product.is_active and customer.is_active
group by "order".id, customer.id, customer.name;

-- select "order".id, json_agg(order_detail.id)
-- from "order"
-- join order_detail on "order".id = order_detail.order_id
-- group by "order".id;
