// forEach

// const numbers = [0, 3, 4, 1, 3, 4, 5, 7, 9]
//
// numbers.forEach((value, index) => {
//   console.log(value, index)
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

const numbers = [0, 3, 4, 1, 3, 4, 5, 7, 9]
const index = numbers.indexOf(3, 9)
console.log(index)
// includes

