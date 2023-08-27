
walk(); //Fn Declaration can be called before declaration. but Fn Expression can't be

function walk(){
    console.log('walking');
}

//at run time js movees function declaration thing above the line where it is called i.e called hoisting
//hoisting is the process of moving fn declaration to the top of file i.e done automatically by JS engine that is executing the code.

