import 'reflect-metadata'
import {Column, Entity} from "typeorm";
import {BaseEntity} from "./BaseEntity";


@Entity('customer')
export class CustomerEntity extends BaseEntity{
  @Column({type: 'text'})
  name: string
}
