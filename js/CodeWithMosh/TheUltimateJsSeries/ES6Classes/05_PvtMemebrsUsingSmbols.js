console.log(Symbol()===Symbol()) //false

// Symbol() gives some unquie value

const _radius=Symbol();
const _draw=Symbol();

class Circle{
    constructor(r)
    {
        // this.radius=r;
        // this['radius']=r;
        this._radius=r; //this is still not pvt, but the r unqiue
    }

    [_draw](){

    }
 }
 

 const c=new Circle(1);
 c._radius // we can still access it, smjh ni aya eh //TODO
 