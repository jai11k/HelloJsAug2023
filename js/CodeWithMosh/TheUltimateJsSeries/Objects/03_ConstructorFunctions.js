//Camel Notation : someFunctionName (Factory function use this)
//Pascal Notation : SomeFunctionName (Constructor function use this)

function Circle(radddiuus,prop,drawVal){
    this.radddiuus=radddiuus,
    this.prop=prop
    this.draw=function(){console.log(drawVal)}
}

const circleObj=new Circle(5,'prop');
// new creates a empty object like {}, and then prop's are created and value is assigned
const emptyObject={}; //example of empty object
console.log(circleObj);