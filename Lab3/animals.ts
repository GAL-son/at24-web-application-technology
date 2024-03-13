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