function extend(Child,Parent) 
{
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child; 
}


function Shape(color){
    this.color=color
    }
    
    Shape.prototype.duplicate=function(){
    console.log('duplicate');
    }
    
    function Circle(){

    }

    


    extend(Circle,Shape);

    //its very important to put method overrriding after extending

    Circle.prototype.duplicate=function(){
        // Shape.prototype.duplicate();
        // Shape.prototype.duplicate.call(this); // call base class method too when overriding
        console.log('duplicate circle');
        }

    const c=new Circle();
    c.duplicate();