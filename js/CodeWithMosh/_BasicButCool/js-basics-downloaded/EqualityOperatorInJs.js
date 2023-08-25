

// Equality Operator (==):
console.log(5 == "5"); // true, because "5" is coerced to a number
console.log(true == 1); // true, because true is coerced to 1
console.log(null == undefined); // true


// Strict Equality Operator (===):
console.log(5 === "5"); // false, because the types are different
console.log(true === 1); // false, because the types are different
console.log(null === undefined); // false

console.log(5 !== 5); //not equal to