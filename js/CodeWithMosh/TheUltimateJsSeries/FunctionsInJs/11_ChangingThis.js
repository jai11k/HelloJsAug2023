

const video2={
    title:'c',
    tags:['a','b','c','d'],
 
    showTags2() {
        const self=this; //thing done in 10_Thiskeyword.js showTags method can also be done like this, but this is not a preffered approach, dont use this appproach
                        //but understand it
        this.tags.forEach(function(singleTag)
                    {
                        console.log("title="+self.title+", "+singleTag+'from showTags2')
                    });
                }
};
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

video2.showTags2();

//anothr approach

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

function playVideo()
{
    console.log('this===>'+ this)
}

playVideo.call({name:'Jai'}); //another way of calling a function, (Q: we say functions are obj in js, here can we call object too like this)?
playVideo();


playVideo.apply({name:'Jai'}); // the call and apply methods are same, 
//the only diff is if the playVideo fn had arguments in call we need to pass them as argyments
// playVideo.call({name:'Jai'},1,2);
// and for apply we need to pass those in array 
//playVideo.apply({name:'Jai'},[1,2]);

playVideo.bind({name:'Jai'})(); //it returns a new fn, and we can call directly that fn
