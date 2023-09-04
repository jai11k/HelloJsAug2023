// Prototype is essentially a parent of another object.
// whenever you hear a word prototype just think parent.

//every obj in js,except only (read to know this) , has a prototype for parent and it inherits all the members we find in its prototype
//lets see this below

let x={};

console.log(x); 
//notirce prop __proto__ in chrom dev tools
//this is the protoype or parent of x object

let y={};


//every object in js directly or indrectly inherts objectBase(from this we mean the object i.e __proto__)
//********the only object in js which dosent have a paraent or protoype is objectBase(this is not official name, just saying here for understanding)

console.log(Object.getPrototypeOf(x)===Object.getPrototypeOf(y)) //proof, that both x and y, inherit same base class
console.log(x.__proto__===y.__proto__) //we didn't wrote like this as this prop is depreciated, should not be used, used for troublshooting poblems

// a prototype is regualar obj in memory, there is nothing special about it
//every obj has a prototype or a parent,expect the root object
