import {AppDataSource} from '../../config/database'
import {CustomerEntity} from "../../entities/CustomerEntity";

class CustomerService {
  async getList() {
    const query =
      AppDataSource
        .getRepository(CustomerEntity)
        .createQueryBuilder("customer")
        .select()
        .where("customer.is_active")

    return await query.getRawMany()
  }
}

const customerService = new CustomerService()

export default customerService