<!-- Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases. -->

# Type Guards-->

In TypeScript, type guard ensure the code handles data safely and accurately by checking the type of a variable in runtime. They help prevent runtime errors, enhance code clarity and improve codes.

## Common type guard in TypeScript

There are different kind of type guard we use in typeScript in different situation. I am writing the most useful type guards below--->

### 1. `typeof` :

use case for primitive types like number,string,boolean. **Example-->**

const getInput (input: string | number) {
    if(typeof input === 'string'){
        return input
    }else{
        return parseFloat(input.toFixed(2))
    }
}

### 2. `instanceof` :

useful with classes to verify object instances
**Example-->**

class Animal {
    name: string;
    spices: string;

    constructor(name:string,spices:string){
        this.name=name;
        this.spices=spices;
    }
    makeSound(){
        console.log(`${this.name} is making sound`)
    }
}

class Dog extends Animal {
    constructor(name: string, spices: string) {
      super(name, spices);
    }
    makeBark() {
      console.log(`${this.name} is barking`);
    }
  }

class Cat extends Animal {
    constructor(name:string,spices:string){
        super(name,spices)
    }
    makeMeaw(){
        console.log(`${this.name} is meawing`)
    }
}

const getAnimal = (animal:Animal) =>{
    if(animal instanceof Dog){
        animal.makeBark();
    }
    else if(animal instanceof Cat){
        animal.makeMeaw();
    }
    else{
        animal.makeSound();
    }
};

const dog = new Dog("German Shepard","dog")
const cat = new Cat("Persian","cat")

getAnimal(dog);

3. `in Guard` : 

good for checking property existence on Object.
**Example:**

interface Car {
    model: string;
}

interface Ship {
    model: string;
    sail: boolean;
}

const getVehicle =(vehicle: Car | Ship)=>{
    if('sail' in vehicle){
        console.log(`Vehicle model is ${vehicle.model} and it can sail`)
    }else{
        console.log(`Vehicle model is ${vehicle.model}`)
    }
}

const car: Car = {
    model: "Audi",
}
const ship:Ship={
    model: "Titanic",
    sail: Yes,
}

const vehicle = getVehicle(car) //Vehicle model is Audi

const vehicle = getVehicle(Ship) //Vehicle model is Titanic and it can sail.


By using type guard we can write safer and more reliable TypeScript code and write code faster.