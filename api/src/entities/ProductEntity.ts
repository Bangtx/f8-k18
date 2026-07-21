import { Entity, Column } from "typeorm";
import {BaseEntity} from "./BaseEntity";

@Entity("product")
export class ProductEntity extends BaseEntity {
  @Column({ type: "text" })
  name: string;

  @Column({ type: "int", default: null })
  price: number;

  @Column({ type: "text", default: null })
  description: string;
}