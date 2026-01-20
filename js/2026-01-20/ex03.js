/*
* book taxi
*
* 41 tran duy hung -> dai hoc back khoa
*
* click "ok"
*
* -> find some drivers (nearest and free)
* */


const user = {
  id: 1,
  name: 'Tran Xuan Banh',
  long: 105.8213, // kinh do
  lat: 21.0296    // vi do
}

const getDistance = (longFrom, latFrom, longTo, latTo) => {
  if (!longFrom || !latFrom || !longTo || !latTo) {
    console.error('invalid params')
  }

  return ((longFrom - longTo) ** 2 + (latFrom - latTo) ** 2) ** 0.5
}

const findNearestDriver = (curLong, curLat) => {
  const drivers= [
    { id: 1, name: "Nguyen Van A", long: 105.8342, lat: 21.0278, isFree: true },
    { id: 2, name: "Tran Van B", long: 105.8411, lat: 21.0302, isFree: false },
    { id: 3, name: "Le Van C", long: 105.8295, lat: 21.0251, isFree: true },
    { id: 4, name: "Pham Van D", long: 105.8456, lat: 21.0328, isFree: true },
    { id: 5, name: "Hoang Van E", long: 105.8203, lat: 21.0199, isFree: false }
  ]

  const freeDrivers = drivers.filter(d => d.isFree)

  let minDistance = null
  let nearestDriver = null

  freeDrivers.forEach(driver => {
    const distance = getDistance(driver.long, driver.lat, curLong, curLat)

    if (!minDistance || minDistance > distance) {
      minDistance = distance
      nearestDriver = driver
    }
  })

  return nearestDriver
}

console.log(findNearestDriver(user.long, user.lat))
