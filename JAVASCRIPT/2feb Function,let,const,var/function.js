function New(){
    var a = "Pratik";   //function scope
    var b = "Petkar";
    console.log(a+" " +b);
}
New();



//function - function is collection of blocks use to desighn particular task ,it is only implement 
//           when we call it.

//diffrence between Var, Let and Const
var c = 10;
c = 4; //Re-initilisation
var c = 5; //Re-declaration
console.log(c);

let r = 20;
r = 10;//Re-initilisation
//let r = 15; //cannot Re-declare
console.log(r);

const p = 25;
//p = 22;//we cannot do Re-initilisation
//const p = 5;//we cannot doRe-declaration
console.log(p);