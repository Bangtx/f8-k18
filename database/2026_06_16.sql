-- select * from pg_stat_activity;

-- create table customer (
--     id int,
--     name text,
--     age int
-- );
--
-- create table product (
--   id int,
--   name text,
--   price int
-- );

-- insert into customer (id, name) values (1, 'Tran Xuan Banh');
--
--
-- insert into customer (id, name, age)
-- values
--     (3, 'Nguyen Quang Tien', 20),
--     (4, 'Nguyen Cao Cuong', 30);
--
--
-- update customer set name = 'Tran Xuan Bang' where id = 1;

DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS product;

SELECT
    relname AS table_name,
    pg_size_pretty(pg_total_relation_size(relid)) AS size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC;

delete from member where id != 973153;

select * from member;

