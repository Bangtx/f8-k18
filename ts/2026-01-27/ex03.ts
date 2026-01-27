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

  sendNoti: () => void
}

class Store implements StoreI {
    sendNoti: () => void
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
}

/*
* store co the
*   them sp
*   lay sp
*   them kh
*   lay kh
*   thong bao cho KH biet khi co san pham moi ve
* */

// interface UserI {
//   getPassword
// }