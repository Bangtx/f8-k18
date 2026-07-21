import 'reflect-metadata'
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string

  @Column({ type: 'timestamptz' })
  createdAt: Date

  @Column({ type: 'timestamptz' })
  createdBy: number

  @Column({ type: 'timestamptz' })
  updatedAt: Date

  @Column({ type: 'bigint' })
  updatedBy: number

  @Column({ type: 'timestamptz' })
  deletedAt: Date

  @Column({ type: 'bigint' })
  deletedBy: number

  @Column({ type: 'boolean' })
  isActive: boolean
}

// createdBy created_by bigint,
// updated_at timestamptz,
// updated_by bigint,
// deleted_at timestamptz,
// deleted_by bigint,
// is_active boolean default true