
const person={
    firstName:'jai',
    lastName:'singh',
     normalMEthodFullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

// getters =>access props
// setters => change or mutate them

// console.log(`${person.firstName} ${person.lastName}`);
console.log(person.normalMEthodFullName());

console.log(person.fullName); // now we r using the func as prop


person.fullName='jaii simran';

console.log(person.fullName);