// const a = [1, 2, 3]
// const b = [3, 2, 1]
// // const b = []
// // b.push(a[0])
// // b.push(a[1])
// // b.push(a[2])
//
// const c = JSON.parse(JSON.stringify(a))
//
//
// console.log(c)

const a= [
  { id: 1, name: "Nguyen Van A", long: 105.8342, lat: 21.0278, isFree: true },
  { id: 2, name: "Tran Van B", long: 105.8411, lat: 21.0302, isFree: false },
  { id: 3, name: "Le Van C", long: 105.8295, lat: 21.0251, isFree: true },
  { id: 4, name: "Pham Van D", long: 105.8456, lat: 21.0328, isFree: true },
  { id: 5, name: "Hoang Van E", long: 105.8203, lat: 21.0199, isFree: false }
]

const b = JSON.parse(JSON.stringify(a))

a[0].id = 100

console.log(b)