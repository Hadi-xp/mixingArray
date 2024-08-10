//my Arrays
let myArray = [1,2,3];
let otherArray = [4,5,6];

//the function below will get 2 parameters that use concat method to mix Arrays

function getArray(firstArray,secondArray){
    return firstArray.concat(secondArray);
}

//the function below will use spread oprator for mixing Arrays

function mergArray(firstArray,secondArray){
    let newArray = [...firstArray,...secondArray];
    return newArray.sort();
}

