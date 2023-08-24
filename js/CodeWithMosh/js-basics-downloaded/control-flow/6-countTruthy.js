
const array = [0, null, undefined, '', 2, 3];

console.log('count is '+countTruthy(array));

function countTruthy(array) {
  let count = 0; 
  for (let value of array) 
    if (value)
    {
      count++;
    }
    else
    {
      console.log('not a truthy value '+value)
    }
      
  return count; 
}
