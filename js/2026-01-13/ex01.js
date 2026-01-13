const student = {
  id: 1,
  name: 'student 1'
}

// get value

// new key
student.address = 'Ha noi'
student['age'] = 10

const key = 'custom-key'

student[key] = '1234567'

// console.log(student)

delete student.address

// console.log(student)


// for (const item in student) {
//   console.log(item, student[item])
// }

const keys = Object.keys(student)
console.log(keys)

const values = Object.values(student)
console.log(values)