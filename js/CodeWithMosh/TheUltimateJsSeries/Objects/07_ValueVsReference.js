//Value Types -> Number,String,Boolean,Symbol,undefined,null
//Reference Types -> Object,Function(are also objects),Array(same Array are also objects) therefore,
// in a nutt shell, in js we have primitive type and objects

let x=10;
let y=x; //(the value is copied i.e a new copy of variable is made)

x=20;

console.log(x);
console.log(y);

let a={value:10}; 
let b=a; //(the ref is copied, not the whole object is copied)

a.value=20;

console.log(a);
console.log(b);

//conclusion 
//primitives are copied by their value
//refernces are copied by their references

//#region anotherExample
console.log('=============== another example');

let num=10;
let numObj={value:10}
function increase(number,numObj)
{
number++;
numObj.value++;
}
increase(num,numObj);
console.log(num);
console.log(numObj.value);
//#endregion