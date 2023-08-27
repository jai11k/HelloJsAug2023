
function Circle(radius)
{
    this.radius=radius;
    this.draw=function(){
        console.log('drawVal');
    }
}


const normalCircleObj=new Circle(3);
console.log(normalCircleObj);

const result=Circle.call(normalCircleObj,10); //here normalCircleObj will refer to this in function circle and it has only argument, that's why only 1 argument is passed
console.log(result); //constructor function does not explicitly return a value
console.log(normalCircleObj);

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.call(person1, "Oslo", "Norway"));