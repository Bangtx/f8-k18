// const numbers = [0, 2, 3, 4]
//
// let i = 0
//
// while (i < numbers.length) {
//   console.log(numbers[i])
//   // i ++
// }

// for (let j = 0; j < 10; j = j) {
//   console.log(j)
// }


const a = [1, 4, 6, 9, 10, 13, 17, 19, 20] // sorted
const b = [2, 3, 4, 5, 8, 9, 11, 14, 16, 18] // sorted

/*
* merge a and b to sortedNumbers
* ex sortedNumbers = [1, 2, 3, 4, 4, 5, 6, 8, 9]
* use push func
*
*
*
 [1, 4, 6, 9]     [2, 3, 4, 5, 8]
           ▲                   ▲
           │                   │
           i                   j

  i = 0, j = 0 ─► 1 < 2 -> push 1 into sortedNumbers
                           i ++
  i = 1, j = 0 ─► 4 > 2 -> push 2 into sortedNumbers
                           j ++
  i = 1, j = 1 ─► 4 > 3 -> push 3 into sortedNumbers
                           j ++
  i = 1, j = 2 ─► 4 = 4 -> push 3 into sortedNumbers
                           i ++
  i = 2, j = 2 ─► 6 > 4 -> push 4 into sortedNumbers
                           j ++
  i = 2, j = 3 ─► 6 > 5 -> push 5 into sortedNumbers
                           j ++
  i = 2, j = 4 ─► 6 < 8 -> push 6 into sortedNumbers
                           i ++
  i = 3, j = 4 ─► 9 > 8 -> push 8 into sortedNumbers
                           j ++ -> out of range
                                -> break
  i < a.length -> push 9
  j < b.length -> push 8

Ologn
* */

let i = 0, j = 0, count = 0
const sortedNumbers = []


while (i < a.length && j < b.length) {
  if (a[i] <= b[j]) {
    sortedNumbers.push(a[i])
    i ++
  }
  else {
    sortedNumbers.push(b[j])
    j ++
  }
  count ++
}

for (let idx = i; idx < a.length; idx ++) {
  sortedNumbers.push(a[idx])
  count ++
}


for (let idx = j; idx < b.length; idx ++) {
  sortedNumbers.push(b[idx])
  count ++
}

console.log(sortedNumbers, count)

/*
hashmap
* */























