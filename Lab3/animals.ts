// Exc. 4
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() : string {
        return "...";
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "Meow...";
    }
}


class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "Woof...";
    }
}

// Testing 
let animals : Array<Animal> = [];

animals.push(new Animal("Robert"));
animals.push(new Dog("Rex"));
animals.push(new Cat("Kenji"));

animals.forEach(animal => {
    console.log(animal.name + ": " + animal.makeSound());    
});
