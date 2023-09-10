function createCircle(radius)
{
    this.radius=radius;
    this.draw=function(){console.log('draw')};
}

const c1=new createCircle(10);
const c2=new createCircle(10);

//suppose we have thousands of circle obj's in an application, but the draw method is same, 1000 copies of draw method is waste of memory, heela=>

function createCircleFocused(radius)
{
    //instance members
    this.radius=radius;
    this.move=function(){
        console.log('move');
    }
}

//prototype members
createCircleFocused.prototype.draw=function(){
    this.move(); 
    console.log('draw focused')
};

const c3=new createCircleFocused(10);
const c4=new createCircleFocused(10);

c3.draw(); //we can still access this from parent class


createCircleFocused.prototype.toString=function(){
    return 'circle with radius'+this.radius;
}
c3.toString(); // works in chrome dev tools not in vs code, hmm strange
console.log('helo');


//at last remmeber, in both these kind of members, you can refer other memebers like move fn(instance memeber) is being called inside prototype draw fn
//we could do vice verca too

