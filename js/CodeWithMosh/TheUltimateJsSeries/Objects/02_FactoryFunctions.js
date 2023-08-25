function createCircle(radius,color,drawNo)
{
    return {
        radius:radius,
        color,
        draw(){
            //defined this logic at one place
            console.log("radius="+radius+" ,color="+color+"draw-"+drawNo)
        }
    }
}

console.log(createCircle(5,'blue',5));
createCircle(5,'blue',5).draw();