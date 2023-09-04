//Abstraction - > Hide the details show the essentials

//here we only seeing, why we need abstraction

function Circle(radius)
{
    this.radius=radius;

    this.defaultLocation={x:0,y:1};

    this.computeOptimumLocation=function(factor)
    {
        //...
    }

    this.draw= function(){

       
    this.computeOptimumLocation();  
    console.log('draw')

    }

}

const c=new Circle(1);
// c.computeOptimumLocation(); what if we wanted to wanted to call this method only internallly, some one can pass fauly value here and set the object state to bad, 
//which willl give error at run time, which anyone won't like
// c.draw();
