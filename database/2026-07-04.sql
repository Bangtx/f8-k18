select
    province.name as province,
    json_agg(
            json_build_object(
                    'customer',
                    json_build_object(
                            'id', customer.id,
                            'name', customer.name
                    )
            )
    ) as detail,
    sum("order".amount) as total_amount
from province
         join customer on customer.province_id = province.id
         join "order" on "order".customer_id = customer.id
group by province.name;

with
    province_customer_order as (
        select
            json_build_object(
                    'id', customer.id,
                    'name', customer.name
            ) as customer,
            customer.province_id,
            sum("order".amount) as amount
        from customer
                 join "order" on "order".customer_id = customer.id
        group by customer.id, customer.name, customer.province_id
    )
select
    province.name as province,
    json_agg(
            json_build_object(
                    'customer', province_customer_order.customer,
                    'amount', province_customer_order.amount
            )
    )
from province
         join province_customer_order on province_customer_order.province_id = province.id
group by province.name;
