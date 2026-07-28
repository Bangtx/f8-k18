import 'reflect-metadata'
import {Column, Entity} from "typeorm";
import {BaseEntity} from "./BaseEntity";


@Entity('order_detail')
export class OrderDetailEntity extends BaseEntity{
  @Column({type: 'bigint'})
  orderId: number

  @Column({type: 'bigint'})
  productId: number

  @Column({type: 'int'})
  quantity: number
}