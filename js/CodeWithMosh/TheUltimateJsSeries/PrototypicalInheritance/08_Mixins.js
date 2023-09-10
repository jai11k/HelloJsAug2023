function mixin(target,...sources) //rest operator  i.e rest of the sources
{
    Object.assign(target,...sources); //spread operator i.e spread the elements of array , syntax might be same, but it does make sense
}



const canEat={
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
}


const canWalk={
    walk: function(){
        console.log('walking');
    }
}


const canSwim={
    swim: function(){
        console.log('swimming');
    }
}

const person=Object.assign({},canEat,canWalk);
console.log(person);
//if we r using constructor FN, we can still use this technique

function Person(){

}

Object.assign(Person.prototype,canEat,canWalk); // we dont need to assign it, we r modifing capability of persob obj
//next time we create person obj, it will have those methods

const person2=new Person();

function GoldFish(){

}

// Object.assign(GoldFish.prototype,canEat,canSwim);
//instead of this we can create FN
mixin(GoldFish.prototype,canEat,canSwim)

//so we can see composition or mixins gives us great flexibility

const gFish    =new GoldFish();
