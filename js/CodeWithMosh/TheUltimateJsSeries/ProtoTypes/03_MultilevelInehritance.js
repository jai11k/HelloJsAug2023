let myArray=[];

// if we console myArray in chrome dev tools
//myArray has parent say arrayBase, arrayBase further have a parent say objectBase(see in chrome dev tools)

function createCircle(radius)
{
    this.radius=radius;
    this.draw=function(){console.log('draw')};
}

const circle=new createCircle(10);

// if we console circle in chrome dev tools
//this __proto__ is prototype for all circle objects we create using are circle constructor,lets say it circleBase(again just a name for understanding)

//every time we call the circle constructor to create a new circle obj, this constructor will create a new obj and set its prototype prop to circleBase
//in other words
//objects created by a given constructor will have the same prototype

//further of course, circle base also has a prototype __proto__ i.e objectBase
