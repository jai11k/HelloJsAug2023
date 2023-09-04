function Circle(radius)
{
    this.radius=radius;

    let defaultLocation={x:0,y:1};

    let computeOptimumLocation=function(factor)
    {
        //...
    }

    this.draw= function(){

        let x,y; //x,y have scpoe only b/w this fn's curly braces, when we finish executing this fn, x and y goes out of scope
    computeOptimumLocation();  // we can call this method here, bc of closure. a closure determines what variables will be accessible to an inner fn
    console.log('draw')

    }

}

const c=new Circle(1);
