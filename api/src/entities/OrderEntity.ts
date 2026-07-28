import 'reflect-metadata'
import {Column, Entity} from "typeorm";
import {BaseEntity} from "./BaseEntity";


@Entity('order')
export class OrderEntity extends BaseEntity{
  @Column({type: 'date'})
  date: Date

  @Column({type: 'bigint'})
  customerId: number
}