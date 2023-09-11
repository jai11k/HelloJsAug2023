const _radius=new WeakMap();

class Circle{
    constructor(r)
    {
        _radius.set(this,radius);


           //earleir we did
    // Object.defineProperty(this,'radius',{
    //     get: function(){

    //     }
    // });
        //this is difficult, in ES6 we can create getter setter much easier




    }

 
    getRadius() //getter method(one way)
    {
        return _radius.get(this);
    }
    get radius() //in ES6 we can do like this, it looks like method, but we can access it like prop
    {
        return _radius.get(this);
    }

    set radius(value)
    {
        if(value<0) throw new Error('invalid radius')
        _radius.set(this,value);
    }
 }