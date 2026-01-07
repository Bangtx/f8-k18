const person = {
  name: "Huong Tran",
  age: 20,
  address: "HN",
  self: function () {
    return this
  }
}

// 0x01, self: 0x01

person.self().self().self().name = 'Dong Vu'

const {name, age} = person
//    {name}        = {name, age}
// const name = person.name
console.log(name, age)

const str = `${name} nam nay ${age} tuoi`

const person2 = person

console.log(person2 === person)
