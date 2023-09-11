// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }

class Circle{
    constructor(radius){
        this.radius=radius;
      

            //if you want method not to be in prototype, directly in instance then here
            this.move=function(){
                console.log('move');

        }
    }
//all methods here will be in prototype of circle obj
    draw(){
        console.log('draw');
    }
}

const c=new Circle(1);