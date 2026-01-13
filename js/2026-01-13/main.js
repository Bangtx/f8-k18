// const students = [
//   {id: 1, name: 'john'},
//   {id: 2, name: 'kate'}
// ]
//
//
// for (const student of students) {
//   console.log(student)
//
//   student.name = 'replaced'
// }
//
// console.log(students)

/*
* 2 array (companies, persons)
* id - unique number
* */

const companies = [
  { id: 1, name: 'fpt' },  // 0
  { id: 3, name: 'viettel' },  // 1
  { id: 2, name: 'vnpt' }  // 2
]

const persons = [
  { id: 1, name: 'Huong Tran', companyId: 3 },  // 0
  { id: 2, name: 'Dong Vu', companyId: 1 },  // 1
  { id: 3, name: 'Tien Vuong', companyId: null },
  { id: 4, name: 'Son Nguyen', companyId: 2 },
  { id: 5, name: 'Bach Hoang', companyId: 3 }
]


// for (const person of persons) {
//   const {companyId} = person
//
//   if (companyId === null) {
//     console.log(`${person.name} --`)
//   }
//
//   for (const company of companies) {
//     if (company.id === companyId) {
//       console.log(`${person.name} -- ${company.name}`)
//     }
//   }
// }

/*
* console.log(personName, '--', companyName)
* console.log(`${personName} -- ${companyName})`
* Huong Tran -- viettel
* Dong Vu -- fpt
* Tien Vuong --
*
* findCompanyByPersonId(persons, companyId) -> companyName
* */

const findById = (arr, id) => {
  /*
  arr, id: params
  * arr = [
  *   {id, name, ...},
  *   {id, name, ...}
  * ]
  * ex -- vi du
  * arr = [
  *   {id: 1, name: 'obj 1'},
  *   {id: 2, name: 'obj 2'},
  * ]
  * id: 2
  *
  * ket qua ki vong: {id: 2, name: 'obj 2'}
  * expected result: {id: 2, name: 'obj 2'}
  * */

  for (const item of arr) {
    if (item.id === id) {
      return item;
    }
  }
}

const findCompanyByPersonId = (persons, companies, personId) => {
  const person = findById(persons, personId)
  const {companyId} = person

  // const companyId = person.companyId
  const company = findById(companies, companyId)
  return company ? company.name : null
}


const companyName = findCompanyByPersonId(persons, companies, 3)
