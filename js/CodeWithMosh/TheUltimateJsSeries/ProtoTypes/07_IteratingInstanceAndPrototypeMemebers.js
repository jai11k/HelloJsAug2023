function createCircleFocused(radius)
{
    //instance members
    this.radius=radius;

    this.move=function(){
        console.log('move');
    }
}

const c1=new createCircleFocused(1);


createCircleFocused.prototype.draw=function(){
    console.log('draw focused')
};


c1.draw();

//object.Keys only returns instance members

for (const key in c1) console.log(key) //it returns all members (instance + prototype )

console.log(c1.hasOwnProperty('radius')); //true (chrome dev tools)
console.log(c1.hasOwnProperty('draw')); //false (chrome dev tools)