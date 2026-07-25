import {AppDataSource} from '../../config/database'
import {ProductEntity} from "../../entities/ProductEntity";

class ProductService {
  async getList() {
    const query =
      AppDataSource
        .getRepository(ProductEntity)
        .createQueryBuilder("product")
        .select([
          "product.id as id",
          "product.name as name",
          "product.price as price",
          "product.description as description",
        ])
        .where("product.is_active")

    return await query.getRawMany()
  }

  async create(product: any) {
    const query =
      AppDataSource
        .getRepository(ProductEntity)
        .createQueryBuilder("product")
        .insert()
        .into(ProductEntity)
        .values([product])
        .returning(["id", "name"])

    return await query.execute()
  }

  async updateById(id: number, product: any) {
    const query =
      AppDataSource
        .getRepository(ProductEntity)
        .createQueryBuilder("product")
        .update(product)
        .where("product.id = :id", {id})
        .returning(["id", "name"])

    return await query.execute()
  }

  async deleteById(id: number){
    const query: any = AppDataSource
      .getRepository(ProductEntity)
      .createQueryBuilder("product")
      .update(ProductEntity)
      .set({
        isActive: false,
        deletedAt: new Date()
      })
      .where("product.id = :id", {id})
      .returning(["id", "name", "isActive"]);

    return await query.execute();
  }
}

const productService = new ProductService()

export default productService