// log  1 -> 10

let i = 0

/*
* for (start, end, next) {
*   do something
* }
* */
// for (i = 0; i <= 3; i++) {
//   console.log('ok anh em')
// }

/*
* for (i = 0; i < 3; i = i + 1) {
  console.log('ok anh em')
}

i = 0, check i <= 3  --> ok anh em, i = 1
i = 1, check 1 <= 3  --> ok anh em, i = 2
i = 2, check 2 <= 3 --> ok anh em, i = 3
i = 3, check 3 <= 3 --> ok anh em, i = 4
i = 4, check -> close

* */

// const numbers = [1, 3, 5, 3, 3, 4, 9, 8]
/*
* bai 1: in ra tung phan tu
* bai 2: in ra nhung so chan
* bai 3: tinh tong cac so le
* 10 phut
* bai 4: in ra so lon nhat
* bao 5: in ra so be nhat
* bai 6: sap xep tu be den lon
* 20 phut
* */

// for (let i = 0; i < numbers.length; i ++) {
//   console.log(numbers[i])
// }

// console.log(Array.isArray([]))

// const isEvenNum = (n) => n % 2 === 0

// for (let i = 0; i < numbers.length; i ++) {
//   if (isEvenNum(numbers[i])) console.log(numbers[i])
// }

// const numbers = [1, 3, 5, 3, 3, 4, 9, 8]
//
// let sum = 0
//
// for (let i = 0; i < numbers.length; i ++) {
//   if (!isEvenNum(numbers[i])) {
//     console.log(sum, numbers[i])
//     sum = sum + numbers[i]
//     // sum += numbers[i]
//     console.log(sum)
//     console.log('----------------')
//   }
// }
//

// const numbers = [1, 3, 5, 3, 3, 4, 9, 8]

/*
*
numbers = [1, 3, 5, 3, 3, 4, 9, 8]
i   numbers[i]    max
0       1           1
1       3           3
2       5           5
3       3           5
4       3           5
5       4           5
6       9           9
7       8           9
* */
//
// const getMaxNum = (arr) => {
//   if (!Array.isArray(arr)) {
//     console.error('invalid')
//     return
//   }
//   if (arr.length === 0) return
//
//   let max = arr[0]
//
//   for (let i = 0; i < arr.length; i ++) {
//     if (max < arr[i]) max = arr[i]
//   }
//
//   return max
// }
//
// console.log(getMaxNum([]))

// const numbers = [2, 9, 5, 1]
//
// let count = 0
//
// for (let j = 0; j < numbers.length - 1; j++) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] > numbers[i + 1]) {
//       const temp = numbers[i]
//       numbers[i] = numbers[i + 1]
//       numbers[i + 1] = temp
//     }
//
//     count++
//   }
// }

// On^2 -> n ~ array.length
// On -> n ~ array.length
// Olog(n) -> n ~ array.length
// O1 -> n ~ array.length

// console.log(numbers, count)


// const numbers = [2, 9, 5, 1]
//
// for (const i of numbers) {
//   console.log(i)
// }


// const sortedNumbers = [1, 2, 3, 5, 7, 9, 11, 12, 13]
// /*
// * tim index so 11
// * */
//
// const getIndex = (arr, n) => {
//   if (!Array.isArray(arr)) {
//     console.error('invalid')
//     return
//   }
//   if (arr.length === 0) {
//     console.error('invalid')
//     return
//   }
//
//   for (let i = 0; i < arr.length; i ++) {
//     if (arr[i] === n) return i;
//   }
// }
//
// console.log(getIndex(sortedNumbers, 11))


// const sortedNumbers = [1, 2, 3, 5, 7, 9, 11, 12, 13]
// log ra nhung so nho hon 11

// let count = 0

// for (let i = 0; i < sortedNumbers.length; i ++) {
//   count ++
//   if (sortedNumbers[i] < 11) {
//     console.log(sortedNumbers[i])
//   } else {
//     break
//   }
// }

// for (const number of sortedNumbers) {
//   count ++
//   if (number < 11) console.log(number)
//   else break
// }
//
// console.log('count', count)

// const numbers = [1, 2, 4, 3]
//
// // const isEvenNum = (n) => n % 2 === 0
//
// for (const number of numbers) {
//
//   console.log('vao day')
//
//   if (number % 2 !== 0) continue
//
//   console.log(number, 'la so chan')
//
// }

const users = [
  {name: "A", active: true, numberOfOder: 10},
  {name: "B", active: false, numberOfOder: 10},  // deleted
  {name: "C", active: true, numberOfOder: 0}
];

// for (const user of users) {
//   if (user.active) {
//     console.log('send mail')
//   }
// }

// active is false do nothing
// active is true -> send mail
// numberOfOder > 0 -> book grab


// for (const user of users) {
//
//   // if (user.active) {
//   //   console.log('send mail')
//   //   if (user.numberOfOder > 0) {
//   //     console.log('book grab')
//   //   }
//   // }
//
//   if (!user.active) continue
//   console.log(user)
//   console.log('send mail')
//
//   if (user.numberOfOder <= 0) continue
//   console.log('book grab')
//
//   console.log('----------')
// }

/*
* prime number: so nguyen to, chi co 2 nghiem la 1 va chinh no
* exp: 2, 3, 5, 7, 11, 13, ....
*
* perfect number: so hoan hao - co tong cac uoc (ngoai tru no) bang chinh no
* exp: 6, 28 ...
* U(6) = {1, 2, 3, 6} -> 6 = 1 + 2 + 3
* U(28) = {1, 2, 4, 7, 14, 28} -> 28 = 1 + 2 + 4 + 7 + 14
*
* isPrimeNumber(n) true / false
* isPerfectNumber(n) true / false
* */

