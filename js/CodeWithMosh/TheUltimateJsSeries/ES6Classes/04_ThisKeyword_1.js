// 'use strict';
// in js we have this mode strict mode
//when we enable this mode, js engine will be more senstive, so it will do more error checking,
//if there are errors that silently fail, its going to turn that into exceptions

//and also it will change the behavious of this keyword in functions
//reason for this, to prevent us to accidently modify the global obj


function Circle(){
    this.draw=function(){
        console.log('this==>'+this);
    }
}

const c=new Circle();

//method call
c.draw();

const draw=c.draw;


//function call
draw();