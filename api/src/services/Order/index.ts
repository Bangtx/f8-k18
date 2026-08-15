import {BaseService} from "../Base";
import {OrderEntity} from "../../entities/OrderEntity";
import {orderDetailService} from "./detail";
import {InsertResult, SelectQueryBuilder} from "typeorm";
import {AppDataSource} from "../../config/database";
import {CustomerEntity} from "../../entities/CustomerEntity";
import {Transactional} from "typeorm-transactional";
import {fMail} from '../FMail'

export class OrderService extends BaseService {

  handleSelect(): SelectQueryBuilder<OrderEntity> {
    return AppDataSource
      .getRepository(OrderEntity)
      .createQueryBuilder('order')
      .select([
        'order.id as id',
        "to_char(order.date, 'YYYY-MM-DD') as date",
        "jsonb_build_object('id', customer.id, 'name', customer.name) as customer"
      ])
      .leftJoin(
        CustomerEntity, 'customer', 'customer.id = order.customer_id'
      )
  }

  async getList(condition: {} = {}): Promise<any[]> {
    const orders = await super.getList(condition)
    const orderDetails = await orderDetailService.getList()

    for (const order of orders) {
      const details = orderDetails.filter(od => od.orderId === order.id)
      order.details = details.map(d => {
        return {
          id: d.id,
          product: d.product,
          quantity: d.quantity
        }
      })
    }

    return orders
  }

  @Transactional()
  async create(order: any) {
    const newOrder = await super.create({
      date: order.date,
      customerId: order.customerId
    })

    const orderId = newOrder.raw[0].id

    // if (orderId) {
    //   throw new Error('BROKEN');
    // }

    const details = order.details.map(od => {
      return {...od, orderId}
    })

    await orderDetailService.createMany(details)

    const result = (await this.getList({id: orderId}))[0]

    await fMail.send()

    return result
  }

}

export const orderService = new OrderService(OrderEntity)