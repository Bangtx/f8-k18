import {ProductEntity} from "../../entities/ProductEntity";
import {BaseService} from "../Base";

class ProductService extends BaseService {
  async getList() {
    return await super.getList( {
      priceLt: 1000
    })
  }

  handleFind(query, condition) {
    let priceLt = null
    if (condition.priceLt) {
      priceLt = condition.priceLt
      delete condition.priceLt
    }

    query = super.handleFind(query, condition);
    if (priceLt) {
      query = query.andWhere(`price < :price`, {price: priceLt})
    }

    return query
  }
}

const productService = new ProductService(ProductEntity)

export default productService