import {AppDataSource} from '../../config/database'
import {CustomerEntity} from "../../entities/CustomerEntity";

class CustomerService {
  async getList() {
    const query =
      AppDataSource
        .getRepository(CustomerEntity)
        .createQueryBuilder("customer")
        .select([
          "customer.id as id",
          "customer.name as name",
        ])
        .where("customer.is_active")

    return await query.getRawMany()
  }

  async create(customer: any) {
    const query =
      AppDataSource
        .getRepository(CustomerEntity)
        .createQueryBuilder("customer")
        .insert()
        .into(CustomerEntity)
        .values([customer])
        .returning(["id", "name"])

    return await query.execute()
  }

  async updateById(id: number, customer: any) {
    const query =
      AppDataSource
        .getRepository(CustomerEntity)
        .createQueryBuilder("customer")
        .update(customer)
        .where("customer.id = :id", {id})
        .returning(["id", "name"])

    return await query.execute()
  }

  async deleteById(id: number){
    const query: any = AppDataSource
      .getRepository(CustomerEntity)
      .createQueryBuilder("customer")
      .update(CustomerEntity)
      .set({
        isActive: false,
        deletedAt: new Date()
      })
      .where("customer.id = :id", {id})
      .returning(["id", "name", "isActive"]);

    return await query.execute();
  }
}

const customerService = new CustomerService()

export default customerService