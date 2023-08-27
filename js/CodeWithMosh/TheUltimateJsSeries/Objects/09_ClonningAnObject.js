const circle={
    radius:5,
    draw:function(){
        console.log("draw1")
    }
}

// const another={};
// for (const key in circle) 
//     another[key]=circle[key]

const another=Object.assign({},circle); // to clone object

const anotherAnother={...another} //spread operator, it copies all prop to new object

console.log(another);