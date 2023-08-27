

//the rest operator is used to pass multiple args, same as params keyword in c#
//args will be an array of arguments when rest operator is used

function sum(...args){
console.log(args) //args is an array
return args.reduce((a,b)=>a+b); //learn this in array's section
}

console.log(sum(1,2,3,4,5,6,7));

function anotherMethod(discount,...prices)
{
    const total= prices.reduce((a,b)=>a+b);
    return total * (1-discount);
}

console.log(anotherMethod(0.10,20,30));