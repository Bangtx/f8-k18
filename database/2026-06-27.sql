create table product (
                         id bigserial primary key,
                         name text,
                         created_at timestamptz default now(),
                         created_by bigint,
                         updated_at timestamptz,
                         updated_by bigint,
                         deleted_at timestamptz,
                         deleted_by bigint,
                         is_active boolean default true
);

create table customer (
                          id bigserial primary key,
                          name text,
                          created_at timestamptz default now(),
                          created_by bigint,
                          updated_at timestamptz,
                          updated_by bigint,
                          deleted_at timestamptz,
                          deleted_by bigint,
                          is_active boolean default true
);


create table employee (
                          id bigserial primary key,
                          name text,
                          position text,
                          created_at timestamptz default now(),
                          created_by bigint,
                          updated_at timestamptz,
                          updated_by bigint,
                          deleted_at timestamptz,
                          deleted_by bigint,
                          is_active boolean default true
);

create table project (
                         id bigserial primary key,
                         customer_id bigint,
                         product_id bigint,
                         service text,
                         created_at timestamptz default now(),
                         created_by bigint,
                         updated_at timestamptz,
                         updated_by bigint,
                         deleted_at timestamptz,
                         deleted_by bigint,
                         is_active boolean default true
);

create table assignment (
                            id bigserial primary key,
                            project_id bigint,
                            employee_id bigint,
                            created_at timestamptz default now(),
                            created_by bigint,
                            updated_at timestamptz,
                            updated_by bigint,
                            deleted_at timestamptz,
                            deleted_by bigint,
                            is_active boolean default true
);

INSERT INTO customer (name)
VALUES
    ('nong san f8'),
    ('nong san vinh cuu'),
    ('nong san huu co xanh');

INSERT INTO employee (name, position)
VALUES
    ('nguyen van son', 'SALES'),
    ('hoang xuan bach', 'DOCUMENT_TECHNICIAN'),
    ('hoang van hung', 'DOCUMENT_TECHNICIAN'),
    ('tran thi linh', 'FIELD_TECHNICIAN');

INSERT INTO project (customer_id, product_id, service)
VALUES
    (1, 1, 'ISO22K'),
    (2, 1, 'GACC'),
    (1, 1, 'VietGAP'),
    (3, 2, 'HACCP');

INSERT INTO product (name)
VALUES
    ('sau rieng'),
    ('mit'),
    ('bo sap');


INSERT INTO assignment (project_id, employee_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 4),
    (4, 4),
    (4, 4),
    (3, 2);

-- project                                 SALES               DOCUMENT_TECHNICIAN    FIELD_TECHNICIAN
-- id    customer             product      sales               document_technician    field_technician     service
-- 1     nong san f8          sau rieng    nguyen van son      hoang xuan bach        tran thi linh        ISO22K
-- 2     nong san vinh cuu    sau rieng    null                null                   null                 GACC
-- 3     nong san f8          sau rieng    null                hoang xuan bach        null                 VietGAP

select * from employee;

with
    sales as (
        select * from employee where position = 'SALES'
    ),
    docs as (
        select * from employee where position = 'DOCUMENT_TECHNICIAN'
    ),
    fields as (
        select * from employee where position = 'FIELD_TECHNICIAN'
    )
select
    project.id,
    customer.name,
    project.service,
    sales.name as sales,
    docs.name as document_technician
--     fiels.name as fiels_technician
from project
         join customer on project.customer_id = customer.id
         join assignment on assignment.project_id = project.id
         left join sales on sales.id = assignment.employee_id
         left join docs on docs.id = assignment.employee_id;

with
    temp_assigment as (
        select * from assignment where is_active
    ),
    sale_assignments as (
        select
            temp_assigment.project_id as project_id,
            employee.name as emp_name
        from temp_assigment
                 join employee on employee.id = temp_assigment.employee_id
        where position = 'SALES'
    ),
    doc_assigmnents as (
        select
            temp_assigment.project_id as project_id,
            employee.name as emp_name
        from temp_assigment
                 join employee on employee.id = temp_assigment.employee_id
        where position = 'DOCUMENT_TECHNICIAN'
    )
-- select * from sale_assignments;
select
    project.id,
    customer.name,
    project.service,
    sale_assignments.emp_name as sales,
    doc_assigmnents.emp_name as document_technician
--     fiels.name as fiels_technician
from project
         join customer on project.customer_id = customer.id
         left join sale_assignments on sale_assignments.project_id = project.id
         left join doc_assigmnents on doc_assigmnents.project_id = project.id;


select * from project;
select * from product;

-- product     customers
-- sau rieng   [{id: 1, name: f8}]

-- with result as (
--     select
--         prod.name,
--         json_agg(
--                 json_build_object(
--                         'id', cst.id,
--                         'name', cst.name
--                 )
--         )
--     from project proj
--              join product prod on prod.id = proj.product_id
--              join customer cst on cst.id = proj.customer_id
--     group by prod.name
-- )
-- select * from result;


-- lam theo 2 cach

-- select
--     project.id,
--     customer.name,
--     project.service,
--     sale.name as sales,
--     document.name as document_technician,
--     fiels.name as fiels_technician
-- from project
--     join customer on project.customer_id = customer.id
--     join assignment on assignment.project_id = project.id
--     left join (select * from employee join assignment on assignment.employee_id = employee.id) as sale on sale.id = assignment.employee_id
-- --     left join employee as document on document.id = assignment.employee_id and document.position = 'DOCUMENT_TECHNICIAN'
--     left join employee as fiels on fiels.id = assignment.employee_id and fiels.position = 'FIELD_TECHNICIAN'



-- select * from customer where id > 1;

-- with
--     cst as (
--         select * from customer where id > 1
--     ),
--     emps as (
--         select * from employee
--     )
-- select * from emps;



