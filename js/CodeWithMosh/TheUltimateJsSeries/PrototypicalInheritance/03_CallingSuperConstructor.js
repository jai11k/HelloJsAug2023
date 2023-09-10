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