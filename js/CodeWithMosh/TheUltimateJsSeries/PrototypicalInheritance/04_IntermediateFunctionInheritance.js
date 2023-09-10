
//#region oldCodeFromLastFile
function Shape(color){
    this.color=color
    }
    
    Shape.prototype.duplicate=function(){
    console.log('duplicate');
    }
    
    function Circle(radius,color){
        Shape.call(this,color) //this is how we call super constructor
        this.radius=radius;
    }
    
    Circle.prototype=Object.create(Shape.prototype);
    Circle.prototype.contructor=Circle;
    
    Circle.prototype.draw=function(){
        console.log('draw');
    }
    
    const c=new Circle(1,'red');
//#endregion

//now lets, create square from shape

function Square(size){
    this.size=size
}

// Square.prototype=Object.create(Shape.prototype);
// Square.prototype.constructor=Square;
//these two lines for setting up the prototype chain a little bit noisy, so lets refactor this code and create a FN which we cna reuse



function extend(Child,Parent) //note, here first letter is uppercase, as we r expecting these two be constructor FN
{
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child; 
}

extend(Square,Shape);
const sq=new Square(10);


