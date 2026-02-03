import {Master, MasterI} from "../Master";

export interface ProductI extends MasterI {
  getPrice: () => number
  setPrice: (price: number) => void
}

export class Product extends Master implements ProductI {
  private price: number

  constructor(id: number, name: string, price: number) {
    super(id, name)
    this.price = price
  }

  setPrice(price: number){
    this.price = price
  }

  public getPrice() {
    return this.price
  }
}