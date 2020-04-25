class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor() {
        super(name);
        this.likesBath = false;
    }

    getDetails() {
        console.log(`My cats name is ${this.name} 
        and does ${this.likesBath ? '' : 'not'} like bath`);
    }
}

const myCat = new Cat('Fluffy');
myCat.getDetails();