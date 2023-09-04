



Array.prototype.shuffle=function(){
    //..
};

//doing this is not a good practice,suppose you do this today and later after some months you add a lib, and lib have also extended with same name with a diff implementation
//then we would end up spending whole day in debugging the problem

//LESSON=> don't modify objects you don't own.
//yes js is a dynamic language, it makes it really easy to add props and methods to that exisiting object
//but that dosen't means you should modify built in objects

const arrray=[];
arrray.shuffle();