interface ProductI {
  getName: () => string
  getPrice: () => number
  getId: () => number
  setName: (name: string) => void
  setPrice: (price: number) => void
}

class Product implements ProductI {
  protected id: number
  private name: string
  private price: number

  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }

  getName(): string {
    return this.name
  }

  getPrice(): number {
    return this.price
  }

  getId() {
    return this.id
  }

  setName(name: string) {
    this.name = name
  }

  setPrice(price: number){
    this.price = price
  }

  protected doDiscount(percent: number = 50) {
    // discount 50%
    // single responsibility
    const newPrice = this.getPrice() * (100 - percent) / 100
    this.setPrice(newPrice)
  }
}

interface PhoneI extends ProductI {
  getBranch: () => string
  setBranch: (branch: string) => void
}

class Phone extends Product implements PhoneI {
  private branch: string

  constructor(id: number, name: string, price: number, branch: string) {
    super(id, name, price)
    this.branch = branch
  }

  getBranch(): string {
    return this.branch
  }

  setBranch(branch: string) {
    this.branch = branch
  }

  protected doDiscount(percent: number = 20) {
    super.doDiscount(percent)
  }
}

const iphone5 = new Phone(1, 'phone5', 3000000, 'apple')
// const iphone6: PhoneI = new Phone(1, 'phone5', 3000000, 'apple')
// const iphone5: PhoneI = new Phone(1, 'phone5', 3000000, 'apple')

// iphone5.doDiscount()

console.log(iphone5)

























