function getName() {
  return this.firstName + " " + this.lastName
}


const huong = {
  firstName: "Huong",
  lastName: "Tran",
  age: 20,
  address: "766 de la thanh - HN",
  getName: function () {
    return this.firstName + " " + this.lastName
  },
  girlFriend: {
    firstName: "Dong",
    lastName: "Vu",
    age: 20,
    address: "768 de la thanh - HN",
    getName,
  },
}

console.log(huong.girlFriend.getName())

const name = "son"
const age = 20
const son = {
  name, age
}
// const son = {name}
console.log(son)