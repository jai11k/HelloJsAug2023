
//Function Declaration
function walk(){
    console.log('walking');
}

//Function Expression     
// Just like we can set a variable to a number,string,obect, we can set it to Fn as well
// as you know that in js Fn are objects
// setting a variable to Fn is similar setting a variable to object
let run=function(){
    console.log('run');
};

// if we give name then Named Fn Expression, else Anonymous Fn Expression
// let run1=function runFn(){
//     console.log('run1');
// };

walk();
run();

let move=run; //now ref of the obj is copied(in js fn are objects) the obj is same in memory

move();