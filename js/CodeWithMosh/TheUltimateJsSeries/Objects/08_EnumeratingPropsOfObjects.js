const circle={
    radius:5,
    draw:function(){
        console.log("draw1")
    }
}

// for in loop
for (const key in circle) {
   console.log(key,circle[key]);
}

//for of loop (can only be used in itrabales, such as array,map)
// here just learn, object is not iterable
// for (const iterator of circle) {
// }
//however, we have this method

for (const iterator of Object.keys(circle)) 
{
    console.log(iterator,circle[iterator]);
}

//#region GettingDeepInto_Object.keys(circle)

//Object.keys(circle)
//Earlier we learned , that the Object here in Object.keys(circle) is a BUILT IN CONSTRUCTOR FUNCTION.
//so somewhere we have this constructor fn like this

        // function Object() {}

//and whnever we create the object using the object literal syntax, internally that is transalated into a call 
//to this constructor fn.

// so when we create the object using object literal syntax, like this
//const xx={val:1};
// internally that is transalted to call to this 'function Object() {}' Object constructor function,
//that look like this
        // const xx=new Object();

//#endregion

for (const entry of Object.entries(circle)) {
    console.log(entry);
}

if('radius' in circle) console.log('yes radius exists');
if('color' in circle) console.log('yes color exists');
