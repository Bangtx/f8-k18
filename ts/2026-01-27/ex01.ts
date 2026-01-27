interface AnimalI {
  id: number
  name: string
  going: () => void
  speaking: () => void
}

interface DogI extends AnimalI {
  doSomething: () => void
}

interface PugI extends DogI {}

class Animal implements AnimalI {
  id: number

  name = "Animal"

  going() {
    console.log('going')
  }
  speaking() {
    console.log('speaking')
  }
}

class Dog extends Animal implements DogI {

  speaking() {
    super.speaking()
    console.log('go go')
  }

  doSomething() {
    // going + speaking
    this.going()
    this.speaking()
  }
}

class Pug extends Dog implements PugI {
  going() {
    console.log('my pug is going')
  }
  speaking() {
    console.log('my pug is speaking')
  }
}
/*Dog la class*/

// tao 1 instance (the hien) cho class
const pug: PugI = new Pug()
pug.doSomething()
// dog1.speaking()

/*
* ky thuat lap trinh
*   - number, string
*   - for, whiote
* DSA
*   - thuat toan: sap xep, tim kiem
* OOP
*   - java/C#/Ts
* Ui/Ux
* Cong nghe phan mem
* Mang may tinh (Docker, chia subnet, route table, ...)
* Database
* He dieu hanh (Docker - Ubuntu - linux)
* Lap trinh web
* */