const a = {
  id: 1,
  name: "A"
}

const address = "Da nang"
// es6

const b = {
  ...a,
  address
}
// b = {}
// b.id = a.id
// b.name = a.name
// b.address = "Ha Noi"

console.log(a, b)

// const b = { ...a }
// b = {}
// b.id = a.id
// b.name = a.name
// b.address = a.address
// b.girlFriend = a.girlFriend

// b.girlFriend.name = "Hanh"
//
// console.log(a)
// console.log(b)


// add "address"
// a.address = 'Ha Noi'

// const b = JSON.stringify(a)
//
// b.name = 'B'

// const b = JSON.parse(JSON.stringify(a))
//
// b.name = 'B'
//
// console.log(a)
// console.log(b)

