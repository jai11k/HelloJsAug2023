function sum(a,b)
{
    return a+b;
}

console.log(sum(1,2)); //3
console.log(sum(1)); //Nan => bcz 2nd parameter is not defined and 1+undefined=NaN
console.log(sum(1,2,3,4,5)); //3 =>bcz only first two no. are used in parameters

function anotherMethod()
{
console.log(arguments); // every Fn in js have a special object i.e arguments

let total=0;
for (const value of arguments) {
    total +=value;
}
return total;
// return a+b;
}

console.log(anotherMethod(1,2,3,4,5,6,10));