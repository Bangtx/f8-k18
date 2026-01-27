interface AnimalI {
  id: number
  name: string
  going: () => void
  speaking: () => void
}


abstract class Animal {
  id: number

  name = "Animal"

  abstract going(): void // abstract method

  abstract speaking(): void
}

class Dog extends Animal {
  speaking() {
    console.log('speaking')
  }
  going() {
    console.log('going')
  }
}

// make new instance
const dog: Animal = new Dog()
dog.speaking()

// observer