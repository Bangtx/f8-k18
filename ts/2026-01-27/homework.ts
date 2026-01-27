/*
* number
* string
* bool
*
* number[]
*
* partTime: design
* */


// let a: Array<number> = [1, 2, 3]
// let b: number[] = [1, 2, 3]



interface PartTimeI {
  id: number
  name: string
  salary: number
  hoursWorked?: number | null // -> hoursWorked is optional
}


const partTime: PartTimeI = {
  id: 1,
  name: "Tran Xuan Bang",
  salary: 3000000
}

/*
* ptn = {}
* ptn.id = partTime.id
* ptn.name = partTime.name
* ptn.salary = partTime.salary
* */

const ptn = {
  ...partTime,
  hoursWorked: 1000
}

console.log(ptn)

// const partTimeEmployees: PartTimeI[] = [
//   {
//     id: 0,
//     name: "",
//     salary: 0,
//     hoursWorked: 0
//   },
//   {
//     id: 0,
//     name: "",
//     salary: 0
//   }
// ]
//
// console.log(partTime?.hoursWorked)

interface EmployeeI {
  id: number
  name: string
  salary: number
  getSalary: () => number // not function
}

class FullTimeEmployee implements EmployeeI {
    id: number
    name: string
    salary: number
    getSalary() {
      return this.salary
    }
}

class PartTimeEmployee implements EmployeeI {
  id: number
  name: string
  salary: number
  hoursWorked: number
  getSalary() {
    return this.salary * this.hoursWorked
  }
}









































