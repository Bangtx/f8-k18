interface AnimalI {
  arm: number
  lag: number
  speaking: () => string
  going: () => void
  setArm: (arm: number) => void
  setLeg: (leg: number) => void
}

class Animal implements AnimalI {
  arm: number = 2
  lag: number = 2

  speaking() {
    return 'speaking'
  }

  going() {
    console.log('going')
  }

  setArm(arm: number) {
    console.log(arm)
  }

  setLeg(leg: number) {

  }
}

class Dog implements AnimalI {
  arm: number = 2
  lag: number = 2

  speaking() {
    return 'gau gau'
  }

  going() {
    console.log('4 legs')
  }

  setArm(arm: number) {
    console.log(arm)
  }

  setLeg(leg: number) {

  }
}

class Cat implements AnimalI {
  arm: number = 2
  lag: number = 2

  speaking() {
    return 'meo meo'
  }

  going() {
    console.log('4 legs')
  }

  setArm(arm: number) {
    console.log(arm)
  }

  setLeg(leg: number) {

  }
}

const cat = new Cat()
console.log(`what is the cat say: ${cat.speaking()}`)

const dog = new Dog()
console.log(`what is the dog say: ${dog.speaking()}`)



