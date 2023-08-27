//Error Handling


const person={
    firstName:'jai',
    lastName:'singh',
     normalMEthodFullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value)
    {
        if(typeof value !== 'string') 
        {
            //but we want to report an error, thats where we need to throw an exception.
            // return; 
            throw new Error('value is not a string');

            // in js
            //const e=new Error(); is a plain js object like other js objects, the moment we use
            // throw e;        // it comes exception i.e an exceptional situation that should not have happened.
        }

        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

try{
    person.fullName=true;
}
catch(e)
{
console.log('in catch block');
console.log(e);

}
