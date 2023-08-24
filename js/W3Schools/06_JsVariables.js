// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically


//#region Using_var

var x1 = 5;
var y1 = 6;
var z1 = x1 + y1;

{
    var ok = "John Doe";
    var ok = 1;              //can be declared again
    }
    console.log(ok)         //can be accessed outside block

console.log('========== var finished');      
//#endregion

//#region Using_let

// Using let
            // Variables defined with let cannot be Redeclared
            // Variables defined with let must be Declared before use
            // Variables defined with let have Block Scope

            let x2 = 5;
            let y2 = 6;
            let z2 = x2 + y2;
            
            let person = "John Doe", carName = "Volvo", price = 200;
                        

            {
            let ok1 = "John Doe";
            // let ok1 = 0;              // can't do, can do in var
            }
            // console.log(ok1)          //can't use here

console.log('========== let finished');            
//#endregion







//#region Using_const

const x3 = 5;
const y3 = 6;
const z3 = x3 + y3;

const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

//But you can NOT reassign the object:
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

console.log('========== const finished');
//#endregion



// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

// The var keyword was used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in 2015.
// The var keyword should only be used in code written for older browsers.

// 	        Scope	     Redeclare	        Reassign	        Hoisted	        Binds this
// var	        No	            Yes	                Yes	                Yes	            Yes
// let	        Yes	            No	                Yes	                No	            No
// const	    Yes	            No	                No	                No	            No



