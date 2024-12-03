// Spread Operator with Array

// 1. Copying an Array
let array = [1,2,3,4,5]
const copyArray = [...array]//
console.log(copyArray);


// 2. Merging an Array
let array1 = [1,2,3]
let array2 = [4,5,6]
let mergeArray = [...array1, ...array2];
console.log(mergeArray);

// 3. Adding Elements to an Array
let array3 = [2,3,4];
let addElements = [1, ...array3, 5]
console.log(addElements) ;

// 4. Passing Elements of an Array as Function Arguments
let number = [1,2,3,4,5,6];
function Sum(a,b,c, d, e, f){
    return a + b + c + d + e + f;
}

console.log(Sum(...number))