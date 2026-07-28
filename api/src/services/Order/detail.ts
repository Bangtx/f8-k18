import {BaseService} from "../Base";
import {OrderDetailEntity} from "../../entities/OrderDetailEntity";
import {SelectQueryBuilder} from "typeorm";
import {AppDataSource} from "../../config/database";
import {ProductEntity} from "../../entities/ProductEntity";

export class OrderDetailService extends BaseService {
  handleSelect(): SelectQueryBuilder<OrderDetailEntity> {
    return AppDataSource
      .getRepository(OrderDetailEntity)
      .createQueryBuilder('order_detail')
      .select([
        'order_detail.id as id',
        'order_detail.order_id as "orderId"',
        "jsonb_build_object('id', product.id, 'name', product.name) as product",
        'order_detail.quantity as quantity'
      ])
      .leftJoin(
        ProductEntity, 'product', 'product.id = order_detail.product_id'
      )
  }
}

export const orderDetailService = new OrderDetailService(OrderDetailEntity)