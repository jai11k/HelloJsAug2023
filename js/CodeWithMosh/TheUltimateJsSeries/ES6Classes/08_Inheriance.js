class Shape
{
    constructor(color)
    {
        this.color=color;
    }

    move(){
        console.log('move');
    }
}

class Circle extends Shape
{
    constructor(color,radius){
        super(color)//must call parent class constructor
        this.radius=this.radius
    }
    draw()
    {
        console.log('draw ');
    }
}

const c=new Circle('red',1);