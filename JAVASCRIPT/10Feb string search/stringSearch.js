
/*

let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");
console.log(str.indexOf("locate"));  //7
*/

/*
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");
console.log(str.lastIndexOf("locate"));  //21
*/

/*
let str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("John"));  //-1

Both indexOf(), and lastIndexOf() return -1 if the text is not found
*/

/*
let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate", 15));  //21
*/

/*
let str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate", 15)); //7
*/

/*
let str = "Please locate where 'locate' occurs!";
let a = str.search("locate");
console.log(a); //7
*/

/*
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g));
*/

/*
let text = "The rain Ain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/gi));
*/

 /*
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")); //true
*/

/*
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world", 10)); //checks the world start from given number or not  //false
*/

/*
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello"));  //true
*/

/*
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("world", 6)); //true
*/

/*
var text = "John Doe";
console.log(text.endsWith("Doe")); //true
*/

/*
let text = "Hello world, welcome to the universe.";
let a = text.endsWith("world", 11);
console.log(a);
*/

/*
let text =
`The quick
 brown fox 
 jumps over the   //multiline strings
 lazy dog`; 

console.log(text);
*/

/*
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);
*/

