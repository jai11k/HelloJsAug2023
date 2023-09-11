
const _radius=new WeakMap();
const _move=new WeakMap();

class Circle{
    constructor(r)
    {
        _radius.set(this,radius);
        _radius.set(this,function(){
            console.log('move',this)
        }); //in this, this is undefined

        _radius.set(this,()=>{
            console.log('move2',this)
        }); //in this this is circle, bcz in arrow fn, this refers to their containing fn
    }

    draw(){
        console.log(_radius.get(this));
    }
    draw2(){
        _move.get(this)();
    }
 }

 const c=new Circle();
 c.draw();

 //furher in modules we can hide weakmap and expose only obj
 