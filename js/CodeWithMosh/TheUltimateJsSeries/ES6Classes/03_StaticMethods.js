class Circle{
        constructor(radius)
        {
            this.radius=radius;
        }

        //Instance method
        draw()
        {

        }

        //static method
        static parse(str)
        {
            const radius=JSON.parse(str).radius;
            return new Circle(radius);
        }
    
}

//we use static methods to create utility functoins that are not tied to a particular obj
const circle=new Circle.parse('{"radius":3}')
console.log(circle);