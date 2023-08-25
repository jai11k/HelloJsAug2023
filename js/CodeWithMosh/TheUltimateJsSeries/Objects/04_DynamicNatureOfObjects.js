//we can add a prop later, when the object is constructed

const circleFromFactorFn={
    radius:3
};

circleFromFactorFn.color='yellow';
circleFromFactorFn.innercolor='white';
circleFromFactorFn.draw = function(){console.log('draw func')};

delete circleFromFactorFn.innercolor;

console.log(circleFromFactorFn);

//circle obj is const, that means we can't do --> circle={}; but we can change its prop