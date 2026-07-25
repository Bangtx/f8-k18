import {AppDataSource} from '../../config/database'
import {CustomerEntity} from "../../entities/CustomerEntity";
import {BaseService} from "../Base";

class CustomerService extends BaseService {
  async getList() {
    return await super.getList([
      "customer.id as id",
      "customer.name as name",
    ], {
      id: 2
    })
  }
}

const customerService = new CustomerService(CustomerEntity)

export default customerService