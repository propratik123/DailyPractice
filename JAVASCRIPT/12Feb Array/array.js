/*

let myIntro = "Hello, this is Akshay from boardInfinity.";
let introString = myIntro.split(" ");
console.log(introString);


for(let i = 0; i < introString.length; i++) {
    introString[i] = introString[i];
}
console.log(introString.toString());
*/

/*
//PUSH
let givenArray = ["Banana", "Mango", "Strawberry", "Grapes", "Apple"];

console.log(givenArray.push("berry"));
console.log(givenArray);
*/

/*
//POP
let givenArray = ["Banana", "Mango", "Strawberry", "Grapes", "Apple"];
givenArray.pop();
console.log(givenArray);
*/

/*
//SHIFT //UNSHIFT
let givenArray = ["Banana", "Mango", "Strawberry", "Grapes", "Apple"];
console.log(givenArray);
givenArray.shift();
console.log(givenArray);
givenArray.unshift("Lemon");
console.log(givenArray);
*/

/*
 //CONCAT
let firstArray = ["Apple", "Banana", "Grapes"];
let secondArray = ["Lemon", "Carrot"];
let thirdArray = firstArray.concat(secondArray);
let fourthArray = firstArray.concat(secondArray, thirdArray);
console.log(thirdArray);
console.log(fourthArray);
*/

/*
// splice

let fruits = ["Strawberry", "Apple", "Grapes", "Banana", "Kiwi"];

console.log(fruits);

fruits.splice(2, 0, "ABC", "DEF");
console.log(fruits);

fruits.splice(2, 1, "roshan");
console.log(fruits);
*/



// sort
let fruits = ["Strawberry", "Apple", "Grapes", "Banana", "Kiwi"];
let numberArray = [1, 7, 2, 9, 10, 4, 3];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);

// console.log(numberArray);
// numberArray.sort();
// console.log(numberArray);


//reverse

fruits.sort().reverse();
console.log(fruits);