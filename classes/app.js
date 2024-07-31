{
    class ToyotaCar {
        constructor(brand) {
            this.brand = brand
            console.log(brand, "is a toyota car")
        }

        start() {
            console.log("car start")
        }

        stop() {
            console.log("car  stop")
        }
    }

    let fortuner = new ToyotaCar("fortuner")
    console.log(fortuner)
}

{
    class Person{
        constructor(species){
            this.species = species
            console.log("my species",species)
        }

        eat(){
            console.log("eat food")
        }
    }

    class Engineer extends Person{
        constructor(name,age){
            super("homo sapiens")
            this.name = name
            this.age = age
            console.log(`my name is ${name} , my age is ${age} . And i am a engineer`)
        }

        work(){
            console.log("my work is solve problems,and make new things")
        }
    }

    let engObj = new Engineer("hk" , 20)
    console.log(engObj)
    engObj.eat()
}