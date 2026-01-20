// forEach

// const numbers = [0, 3, 4, 1, 3, 4, 5, 7, 9]
//
// numbers.forEach((value, index) => {
//   console.log(value)
// })

/*
*

                   for              for of              forEach


  index             o                 x                   o

  direct value      x                 o                   o

  break             o                 o                   x

  continue          o                 o                   x

  stop condition    o                 x                   x

*
* */

// indexOf

// const numbers = [10, 3, 4, 1, 3, 4, 5, 7, 9]
// const index = numbers.indexOf(3, 2)
// console.log(index)

// includes
// console.log(numbers.includes(109))
// const productName = 'Gạo ST25 (5kg)'
// console.log(productName)
// console.log(productName.toLowerCase().includes('gạo'))

// find
// const e = numbers.find((value, index) => {
//   return value === 400
// })
//
// console.log(e)

// ví dụ
const products = [
  { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
  { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
  { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
  { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
  { id: 5, name: "Trứng gà (10 quả)", price: 45000, remaining: 18 }
];


// find element with id = 3

// const product = products.find((product) => product.id === 3)


// filter elements with id > 3
const filteredProducts = products.filter((product) => {
  return product.id < -3
})

// map
const names = products.map((product) => {
  return product.name
})
// const names = products.map((product) => product.name)

console.log(names)