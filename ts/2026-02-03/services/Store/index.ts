import { ProductI } from "../Product";
import { CustomerI } from "../Customer";

export interface StoreI {
  getId: () => number
  getName: () => string
  getAddress: () => string
  setName: (name: string) => void
  setAddress: (address: string) => void

  addNewProduct: (product: ProductI) => void
  getProducts: () => ProductI[]
  deleteProduct: (productId: number) => void

  getCustomers: () => CustomerI[]
  addNewCustomer: (customer: CustomerI) => void
  deleteCustomer: (cstId: number) => void

  sendNoti: (msg: string) => void
}

export class Store implements StoreI {
  private id: number
  private name: string
  private address: string
  private products: ProductI[]
  private customers: CustomerI[]

  constructor(id: number, name: string, address: string) {
    this.id = id
    this.name = name
    this.address = address

    // init empty array
    this.products = []
    this.customers = []
  }

  deleteCustomer: (cstId: number) => void

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getAddress(): string {
    return this.address
  }

  setName(name: string) {
    this.name = name
  }

  setAddress(address: string) {
    this.address = address
  }

  addNewProduct(product: ProductI) {
    this.products.push(product)
    this.sendNoti(`${product.getName()} da ve rui anhe m oi`)
  }

  getProducts(): ProductI[] {
    return this.products
  }

  deleteProduct(productId: number) {
    const curProducts: ProductI[] = this.getProducts()

    // @ts-ignore
    const index = curProducts.findIndex((p: ProductI) => p.getId() === productId)
    if (index === -1) {
      throw new Error(`product ${productId} not found`)
    }

    curProducts.splice(index, 1)

    this.products = curProducts
  }

  getCustomers(): CustomerI[] {
    return this.customers
  }

  addNewCustomer(customer: CustomerI) {
    this.customers.push(customer)
  }

  sendNoti(msg: string) {
    // loop customers
    const customers = this.getCustomers()
    customers.forEach((customer: CustomerI) => {
      customer.receiveMsg(msg)
    })
  }

}