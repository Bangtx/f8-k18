interface Employee {
  id: number
  name: string
  salary: number,
  active: boolean
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Nguyen Van A",
    salary: 1000,
    active: true
  },
  {
    id: 2,
    name: "Vu Van B",
    salary: 2000,
    active: false
  },
  {
    id: 3,
    name: "Pham Van C",
    salary: 1500,
    active: true
  }
]

// filter active employees

const activeEmployees: Employee[] = employees.filter((e: Employee) => e.active)


// find emp with id = 1
// const e: Employee = employees.find((e: Employee) => e.id === 1)
