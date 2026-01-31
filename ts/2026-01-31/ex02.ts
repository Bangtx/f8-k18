interface ProductI {
  getId: () => number
  getName: () => string
  getPrice: () => number
  setName: (name: string) => void
  setPrice: (price: number) => void
}

interface CustomerI {
  getId: () => number
  getName: () => string
  setName: (name: string) => void
  receiveMsg: (msg: string) => void
}

class Product implements ProductI {
  private id: number
  private name: string
  private price: number

  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }

  setName(name: string) {
    this.name = name
  }

  setPrice(price: number){
    this.price = price
  }

  public getId() {
    return this.id
  }

  public getName() {
    return this.name
  }

  public getPrice() {
    return this.price
  }
}

const iphone4: ProductI = new Product(1, 'iphone4', 100)
const iphone5: ProductI = new Product(2, 'iphone5', 150)


// implement customer
class Customer implements CustomerI {
  private id: number
  private name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  setName(name: string) {
    this.name = name
  }


  public getId() {
    return this.id
  }

  public getName() {
    return this.name
  }

  public receiveMsg(msg) {
    console.log(`
      ${this.getName()} have received the msg:
        ${msg}
    `)
  }
}

const cst1: CustomerI = new Customer(1, 'anh cuong')
const cst2: CustomerI = new Customer(1, 'anh ha')
const cst3: CustomerI = new Customer(1, 'chi trang')


interface StoreI {
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

class Store implements StoreI {
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

const dienmayxanh = new Store(1, 'DIen may xanh', 'Ha Noi - Viet nam')

// dienmayxanh.addNewProduct(iphone4)
// dienmayxanh.addNewProduct(iphone5)

dienmayxanh.addNewCustomer(cst1)
dienmayxanh.addNewCustomer(cst2)

console.log(dienmayxanh.getProducts())
console.log(dienmayxanh.getCustomers())

console.log('---------add iphne 4----------')
dienmayxanh.addNewProduct(iphone4)

dienmayxanh.addNewCustomer(cst3)

console.log('---------add iphne 5----------')
dienmayxanh.addNewProduct(iphone5)


/*
* store co the
*   them sp
*   lay sp
*   them kh
*   lay kh
*   thong bao cho KH biet khi co san pham moi ve
*     -> console.log -> gui mail cho KH sau
* */

// interface UserI {
//   getPassword
// }

// ses - aws
// 16k mail -> 120$
// @fullstack.com -> domain fullstack.com ->
// cuong.com -> bang@cuong.com
