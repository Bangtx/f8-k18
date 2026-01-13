const companies = [
  { id: 1, name: 'fpt' },
  { id: 3, name: 'viettel' },
  { id: 2, name: 'vnpt' },
  { id: 4, name: 'F8' },
  { id: 5, name: 'F88' },
]

const persons = [
  { id: 1, name: 'Huong Tran', companyId: 3 },
  { id: 2, name: 'Dong Vu', companyId: 1 },
  { id: 3, name: 'Tien Vuong', companyId: null },
  { id: 4, name: 'Son Nguyen', companyId: 2 },
  { id: 5, name: 'Bach Hoang', companyId: 5 },
  { id: 5, name: 'Thanh Huy', companyId: 5 },
]


//
const companyMap = {}

// idea: get value (company name) from company id without for loop
/*
const companyMap = {
  1: 'fpt',
  2: 'viettel'
}

const id = 1
companyMap[id] -> pdf
*
* */

let count = 0
for (const company of companies) {
  count++
  companyMap[company.id] = company.name
}

for (const person of persons) {
  const {companyId} = person
  delete person.companyId
  count++

  if (companyId === null) {
    person.company = null
    continue
  }

  person.company = companyMap[companyId]
}

console.log(count)


/*
* ket qua ky vong
* persons = [
  { id: 1, name: 'Huong Tran', company: 'vnpt' },
  { id: 2, name: 'Dong Vu', company: 'fpt' },
  { id: 3, name: 'Tien Vuong', company: null },
  { id: 4, name: 'Son Nguyen', company: 'vnpt' },
  { id: 5, name: 'Bach Hoang', company: 'viettel' }
]
* */

// let count = 0
//
// for (const person of persons) {
//   const {companyId} = person
//   delete person.companyId
//
//   if (companyId === null) {
//     person.company = null
//     continue
//   }
//
//   for (const company of companies) {
//     count++
//     if (company.id === companyId) {
//       person.company = company.name
//       break
//     }
//   }
// }
//
// console.log(count)


/*
* companies.length = 1000
*
* persons.length = 1.0000.0000
*
* 1.000.000.000
* 1,001.000
*
* */