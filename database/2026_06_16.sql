drop table customer;

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

-- insert into customer(id, name)
-- values (1, 'Vuong Duc Tien'),
--        (2, 'Hoang Xuan Bach');

-- insert into customer (name) values ('Chi Binh');

-- insert into customer(name)
-- values ('Vuong Duc Tien'),
--        ('Hoang Xuan Bach');

select id, name, created_at from customer where is_active;

update customer set name = 'tien be' where id = 1;

update customer set is_active = false, deleted_at = now() where id = 1;

insert into customer (name) values ('Vuong Duc Tien');
insert into customer (name, province) values ('Nguyen Van Son', 'Ha Nam');
insert into customer (name, province) values ('Nguyen Anh Son', 'TP HCM');
insert into customer (name, province) values ('Nguyen Minh Hoang', 'Hà Nội');

update customer set name = 'Bui Thi Thanh Binh' where id = 3;

select id, name, province from customer where is_active order by name, id desc ;

alter table customer drop column province;

alter table customer add column province text;

select
    province,
    count(id) as total_customer
from customer
where is_active
group by province
having count(id) > 1
order by total_customer desc
    limit 10 offset 0;

-- from
-- where
-- select
-- group by
-- having
-- order by
-- offset
-- limit

-- Hà Nội   2
-- TP HCM   1
-- Đà Nẵng  1

drop table product;

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

insert into product (name, price, created_by, updated_at, updated_by, is_active)
values
    ('Product 01', 10000, 1, now(), 1, true),
    ('Product 02', 20000, 1, now(), 1, true),
    ('Product 03', 30000, 1, now(), 1, true),
    ('Product 04', 40000, 1, now(), 1, true),
    ('Product 05', 50000, 1, now(), 1, true),
    ('Product 06', 60000, 1, now(), 1, true),
    ('Product 07', 70000, 1, now(), 1, true),
    ('Product 08', 80000, 1, now(), 1, true),
    ('Product 09', 90000, 1, now(), 1, true),
    ('Product 10', 100000, 1, now(), 1, true);


select * from product;

create table "order" (
                         id bigserial primary key,
                         customer_id bigint,
                         product_id bigint,
                         created_at timestamptz default now(),
                         created_by bigint,
                         updated_at timestamptz,
                         updated_by bigint,
                         deleted_at timestamptz,
                         deleted_by bigint,
                         is_active boolean default true
);

insert into "order" (customer_id, product_id, created_by, updated_at, updated_by, is_active)
values
    (2, 1, 1, now(), 1, true),
    (2, 3, 1, now(), 1, true),
    (3, 2, 1, now(), 1, true),
    (3, 5, 1, now(), 1, true),
    (4, 4, 1, now(), 1, true),
    (5, 6, 1, now(), 1, true),
    (6, 7, 1, now(), 1, true),
    (7, 8, 1, now(), 1, true),
    (8, 9, 1, now(), 1, true),
    (8, 10, 1, now(), 1, true);

select * from "order" where id = 1;
select name from customer where id = 2;
select name from product where id = 1;
-- Hoang Xuan Bach mua Product 01

select
    customer.name as customer_name,
    product.name as product_name
from "order"
         join customer on customer.id = "order".customer_id
         join product on product.id = "order".product_id
where "order".id = 1;

-- from
-- join
-- where
-- on
-- select
-- group by
-- having
-- order by
-- offset
-- limit

-- left join
-- right join
-- json_build_object, json_agg
-- index

select
    "order".id,
    customer.name as customer,
    product.name as product
from "order"
         join customer on customer.id = "order".customer_id and customer.is_active
         join product on product.id = "order".product_id and product.is_active
where "order".is_active;


select
    "order".id,
    "order".customer_id,
    customer.name as customer_name,
    product.name as product,
    "order".quantity * product.price as revenue
from "order"
         left join customer on customer.id = "order".customer_id and customer.is_active
         left join product on product.id = "order".product_id and product.is_active
where "order".is_active;

select * from "product";
select * from "order";

alter table "order" add column quantity int;

-- order.id, customer, product, revenue

-- select 10/0;

-- select "order".quantity + 10 from "order";

select
    "order".id,
    case
        when customer.id is null then null
        else json_build_object('id', customer.id, 'name', customer.name)
        end
                                     as customer,
    product.name as product,
    "order".quantity * product.price as revenue
from "order"
         left join customer on customer.id = "order".customer_id and customer.is_active
         left join product on product.id = "order".product_id and product.is_active
where "order".is_active;


-- tim order sp co ten la 'iPhone 15'
select *
from "order"
         join product on "order".product_id = product.id
where product.name = 'iPhone 15';

select "order".id, "order".product_id, product.id
from "order"
         join product on product_id = product.id and product.name = 'iPhone 15';

-- tim ten KH sp co ten la 'iPhone 15'
select customer.name
from "order"
         join product on "order".product_id = product.id
         join customer on "order".customer_id = customer.id
where product.name = 'iPhone 15'
group by customer.name;

-- tim ten KH co tong tien mua hang > 20.000.000
select customer.name, sum("order".quantity * product.price)
from "order"
         join customer on "order".customer_id = customer.id
         join product on "order".product_id = product.id
group by customer.name
having sum("order".quantity * product.price) > 80000000;

-- tim order sp co ten la 'iPhone 15' hoac 'Macbook Pro'
select * from "order";
-- tim product_id co ten la 'iPhone 15' hoac 'Macbook Pro'
select id from product where name in ('iPhone 15', 'Macbook Pro');
-- 1
select * from "order" where product_id in (1, 2);

-- subquery
select *
from "order"
where product_id in (select id from product where name in ('iPhone 15'));

select *
from "order"
         join product on "order".product_id = product.id
where product.name = 'iPhone 15';

drop table customer cascade ;
drop table product cascade ;
drop table "order" cascade ;



