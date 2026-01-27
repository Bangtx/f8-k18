// let a: number = 1
// const a: string = 'Vu Huy'
// const isCorrect: boolean = true

// const a: number[] = [1, 2, 2]


interface Person {
  id: number
  name: string
}

interface CustomI extends Person {
  address: string
}

interface Employee extends CustomI {
  salary: number,
  active: boolean
}


const person: Person = {
  id: 1,
  name: "test"
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Test",
    salary: 1000,
    address: "",
    active: false
  },
  {
    id: 2,
    name: "",
    salary: 0,
    address: "",
    active: false
  }
]


