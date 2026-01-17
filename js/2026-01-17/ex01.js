const products = [
  { id: 1, name: 'iPhone', price: 2000 },
  { id: 2, name: 'Samsung', price: 1500 },
  { id: 3, name: 'Xiaomi', price: 1000 },
  { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 }
    ]
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 }
    ]
  }
]

/*

{
  id: 1,
  items: [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 1 }
  ]
}

mua 2 sp trong 1 don hang
  - 2 cai iPhone   2 * 2000
  - 1 cai Samsung  1 * 1500
  -> $5500

{
  id: 2,
  items: [
    { productId: 1, quantity: 1 },
    { productId: 3, quantity: 3 }
  ]
}

- mua
  - 1 cai iPhone
  - 3 cai Xiaomi
* */


/*

loop orders


calculate total quantity by productId


revanue = price * quantity


find the product have highest revnue

* */

/*
{
  <prodId>: <totalQuantity>
}
{
  1: 3,
  2: 4,
  3: 3,
  4: 1
}
* */

const productQuantityMap = {}

for (const order of orders) {
  const items = order.items

  for (const item of items) {
    const {productId, quantity} = item

    /*
                                        no
     productId in productQuantityMap  ─────►  productQuantityMap[productId] = quantity
                │
                │yes                          ex  map = {},productId = 1,quantity = 3
                ▼
     productQuantityMap[productId] += quantity    map {1: 3}

     ex map {1: 3}
        productId = 1
        quantity = 2

     -> map = {1: 5}

    * */
    // console.log('trc', productId, quantity, productQuantityMap)
    if (productQuantityMap[productId]) {
      productQuantityMap[productId] += quantity
    }
    else {
      productQuantityMap[productId] = quantity
    }

    // console.log('sau', productQuantityMap)
    // console.log('------------------------')
  }
}

const productRevenueMap = {}

// for (const productId in productQuantityMap)
let maxRevenue = 0

for (const product of products) {
  const quantity = productQuantityMap[product.id]

  const revenue = quantity * product.price
  if (maxRevenue < revenue) {
    maxRevenue = revenue
  }

  productRevenueMap[product.id] = revenue
}

console.log(productRevenueMap)
console.log(maxRevenue)






