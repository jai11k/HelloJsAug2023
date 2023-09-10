function Shape()
{
   
}

Shape.prototype.duplicate=function(){
    console.log('duplicate')
}

function Circle(radius)
{
    this.radius=radius;
}

Circle.prototype.draw=function(){
    console.log('ddraw');
}

const s=new Shape();
const c=new Circle(1); 

Circle.prototype=Object.create(ShapeFocused.prototype); //consider previous example, ah line ae na jo is ch apa Circle di protorype prop set set kr rhe,
//eda e 
Circle.prototype.constructor=Circle; 
//Circle.prototype.constructor v set krni hundi(assign Circle constructor fn to it), bus ehi a is bideo ch