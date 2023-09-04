

let obj={};

//when we create obj in js with obj literal syntax, under the hood thats translated to new Object() 

//obj.__proto__ is equal to obj.prototype (check in dev tools)

console.log(obj.__proto__===Object.prototype); //both these r equal



//similaraly
let myArr=[];

console.log(myArr.__proto__===Array.prototype); 