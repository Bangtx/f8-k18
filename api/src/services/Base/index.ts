import {AppDataSource} from "../../config/database";
import {BaseEntity} from "../../entities/BaseEntity";
import {SelectQueryBuilder} from "typeorm";

export abstract class BaseService {
  private entity: new () => BaseEntity;

  constructor(entity: new () => BaseEntity) {
    this.entity = entity
  }

  getTableName() {
    return AppDataSource.getRepository(this.entity).metadata.tableName
  }

  handleSelect() {
    return AppDataSource.getRepository(this.entity)
        .createQueryBuilder(this.getTableName())
        .select()
  }

  handleFind(query: SelectQueryBuilder<BaseEntity>, condition) {
    return query.where({...condition, isActive: true})
  }

  async getList(condition = {}) {
    let query = this.handleSelect()
    query = this.handleFind(query, condition)

    return await query.getRawMany()
  }

  async create(data: any) {
    const query =
      AppDataSource
        .getRepository(this.entity)
        .createQueryBuilder(this.getTableName())
        .insert()
        .into(this.entity)
        .values([data])
        .returning(["id"])

    return await query.execute()
  }

  async createMany(data) {
    const query =
      AppDataSource
        .getRepository(this.entity)
        .createQueryBuilder(this.getTableName())
        .insert()
        .into(this.entity)
        .values(data)
        .returning(["id"])

    return await query.execute()
  }

  async updateById(id: number, data: any) {
    const query =
      AppDataSource
        .getRepository(this.entity)
        .createQueryBuilder(this.getTableName())
        .update(data)
        .where(`${this.getTableName()}.id = :id`, {id})
        .returning(["id"])

    return await query.execute()
  }

  async deleteById(id: number){
    const query: any = AppDataSource
      .getRepository(this.entity)
      .createQueryBuilder(this.getTableName())
      .update({
        isActive: false,
        deletedAt: new Date()
      })
      .where(`${this.getTableName()}.id = :id`, {id})
      .returning(["id"]);

    return await query.execute();
  }
}