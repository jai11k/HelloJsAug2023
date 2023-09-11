class Shape{
    move(){
        console.log('move in shape');
    }
}

class Circle extends Shape
{
    move(){
        super.move();
        console.log('move in circle');
    }
}