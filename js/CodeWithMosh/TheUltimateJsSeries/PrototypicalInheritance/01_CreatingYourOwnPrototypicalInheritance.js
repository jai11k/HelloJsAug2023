function Circle(radius)
{
    //instance members
    this.radius=radius;

    this.move=function(){
        console.log('move');
    }
}


Circle.prototype.draw=function(){
    console.log('draw');
};

Circle.prototype.duplicate=function(){
    console.log('duplicate');
};

//lets imagine tommorow, we r gonna add square object, which will have same duplicate implementation, which we don't want to repeat

function ShapeFocused()
{


    ShapeFocused.prototype.duplicateInShapeFocused=function()
{
    console.log('duplicate');
}
}

const s=new ShapeFocused(); //this s obj inherts from shapeBase and the shapeBae inherits from objectBase
const circle=new Circle(1);  //this c obj inherts from circleBase and the circleBase inherits from objectBase

//to setup inheritance here, we want c to inherit circleBase, circleBase should inherit shapeBase and further shapBase should inherit objectBase
//its easy

// Circle.prototype=Object.create(Object.prototype); //this is objectBase obj being assigned to Circle.prototype //normally in js engine, when we create obj this happens
Circle.prototype=Object.create(ShapeFocused.prototype); //shapeBase

const cAfterInheritance=new Circle(1);  






