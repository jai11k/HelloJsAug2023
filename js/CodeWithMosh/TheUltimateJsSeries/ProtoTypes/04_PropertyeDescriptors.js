let person={name:'jai'};
let objectBase=Object.getPrototypeOf(person);
let descriptor=Object.getOwnPropertyDescriptor(objectBase,'toString');

console.log(descriptor); // this gives description of prop, like writable true means it can be overridden i.e it canot be changed, 

//enumerable true means, it gets counted, when itreating through props of object
console.log(Object.keys(person));

Object.defineProperty(person,'name',
{
    writable:false,
    enumerable:false, //this will not show in object.keys
    configurable:false //we cannot delete this prop
})

person.name='simran';
console.log(person.name);
console.log(Object.keys(person));