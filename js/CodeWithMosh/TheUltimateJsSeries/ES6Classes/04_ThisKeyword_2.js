class Circle{
   draw(){
    console.log(this);
   }
}

const c=new Circle();
const draw=c.draw;
draw();

//this is bydefault in strict mode :)