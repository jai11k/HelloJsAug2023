const circle1={
    radius:5,
    draw:function(){
        console.log("draw1")
    }
}

const circle2={
    radius:6,
    draw:function(){
        console.log("draw2")
    }
}


//#region ChatGPT
const obj = new Object(); // Using constructor
const objLiteral = {};    // Using object literal

// Creating an object using the Object constructor
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.sayHello = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
};

person.sayHello(); // Output: Hello, my name is John Doe

// Creating an object using an object literal
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023
};

console.log(car.make); // Output: Toyota



//#endregion
