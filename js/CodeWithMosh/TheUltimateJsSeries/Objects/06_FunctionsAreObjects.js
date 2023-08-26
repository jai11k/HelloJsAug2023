
function Circle(radius)
{
    this.radius=radius;
    this.draw=function(){
        console.log('drawVal');
    }
}




console.log(Circle.name);
console.log(Circle.length);

console.log(Circle.constructor); //another builtin constructor comes here ->new Function()

//internally, js engine will this function constructor to create the object
const Circle1=new Function('radius',`               
this.radius=radius;
this.draw=function(){
    console.log('drawVal');
}
`); //here first parameter is radius which is of Circle function as well, 2nd parameter is content of Circle function in `` [the character is backtick character]

const circleObj=new Circle1(2);
console.log(circleObj);
const normalCircleObj=new Circle(3)
console.log(normalCircleObj);