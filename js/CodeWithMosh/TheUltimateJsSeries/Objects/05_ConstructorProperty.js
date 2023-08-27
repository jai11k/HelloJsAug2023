//Constructor Func
function Circle(radddiuus,prop,drawVal){
    this.radddiuus=radddiuus,
    this.prop=prop
    this.draw=function(){console.log(drawVal)}
}

//Factory Func
function createCircle(radius,color,drawNo)
{
    return {
        radius:radius,
        color,
        draw(){
            //defined this logic at one place
            console.log("radius="+radius+" ,color="+color+"draw-"+drawNo)
        }
    }
}

const circleFromConstructorFn=new Circle(1,'anyValue','drawVal');

const circleFromFactorFn=createCircle(2,'anyValue',{something:'drawVal'});


console.log('====================info')
console.log('every js object in js has a constructor prop that is referenced by the function through which it was created');
const x={}; // js engine will translate it to something like this -> const x=new Object();
//similarlay we have other built in constructors for example--> new string(),new Boolean(),new Number(),new Function() {this one covered on 06_FunctionsAreObjects}
//For example, when we intialize a string -> ''."" it actually calls builtin constructor only
console.log(x.constructor);

console.log('====================understand diff')

console.log(circleFromConstructorFn.constructor);
console.log('circleFromConstructorFn'); 

console.log('====================separation')
console.log(circleFromFactorFn.constructor); 
console.log('circleFromFactorFn was created using using Factor Fn, and we used object literal syntax thats why constructor prop returning OBJECT'); 





console.log(circleFromFactorFn.constructor); 

