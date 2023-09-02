// What is this?
// This referencees the object that is executing the current function

//rememver in js, a function is also a object

//#1
//if the function is part of an object we call it a method, in that case this will refer to that object
//method -> object


//#2
//if its a regular function i.e its not part of an object,in that case this will refer to the global object i.e window obect in browswer and global in node
// function -> global (window,global)


//#region #1 example
const video={
    title : 'a',
    play()  {
        console.log('this in play', this);
    }
};

const student={
    firstName:'jai',
    lastName: 'simran'
}


video.play();

video.stop=function(){
    console.log('this in stop', this);
}

video.stop();

//#endregion

console.log('========= end of region 1');

//#region #2 example
function playVideo()
{
console.log('this play Video', this)
}

playVideo();

function Video(title)
{
    this.title=title;
    console.log('this in constructor functions(using new operator)',this)
}

const v=new Video('b'); // this is completely diff frm the above, this is like c# object, might be?

//#endregion

console.log('========= end of region 2');

//#region #3 regular function inside object

const video2={
    title:'c',
    tags:['a','b','c','d'],
    showTags() {
    this.tags.forEach( function(singleTag) // THIS FUNCTION IS REGULAR FN, NOT A FN IN VIDEO OBJECT LIKE showTags()
    {
        console.log(this,singleTag) // on this line this refer to global object, which is wrong, to fix this
    }
,this  //this is passed to tell foreach, that this object should be used, when this is called in foreach
);
    },
};

video2.showTags();

console.log('========= end of region 3');

//#endregion