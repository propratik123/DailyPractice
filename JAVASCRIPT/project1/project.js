/*

PROBLEM 1
You are provided with a number, "N". Find its factorial.
Input Description:  
A positive integer is provided as an input.
Output Description:  
Print the factorial of the integer.
Sample Input :
5
Sample Output :
120

let n = 5;

if(n <=0){
    console.log("this number is invalid")
}
else{
    let num = 1;
    for(var i=1; i<=n; i++){
        num *= i;
    }
    console.log(num);
    
}
*/

/*
PROBLEM 2
You are given with a number "N", find its cube.
Input Description:  
A positive integer is provided as an input.
Output Description:  
Find the cube of the number.
Sample Input :
2
Sample Output :
8

let n = 5;

if(n <=0){
    console.log("this number is invalid")
}
else{
    let num = Math.pow(n , 3);
    console.log(num);
    
}
*/

/*
PROBLEM 3
The area of an equilateral triangle is where "a" represents a side of the
triangle. You are provided with the side "a". Find the area of the equilateral triangle.
Input Description:  
The side of an equilateral triangle is provided as the input.
Output Description:  
Find the area of the equilateral triangle and print the answer up to 2 decimal places
after rounding off.
Sample Input :
20
Sample Output :
173.21


let a=20;

if(a<=0){
    console.log("number is invalid")
}
else{
     let b = Math.sqrt(3);
     a = b*a*a;
     a = a/4;
    console.log(a);
}
*/

/*
PROBLEM 4
You will be provided with a number. Print the number of days in the month
corresponding to that number.
Note: In case the input is February, print 28 days. If the Input is not in valid range
print "Error".
Input Description:  
Input n -> month number
Output Description:  
Find the days in the month corresponding to the input number. Print Error if the input
is not in a valid range.
Sample Input :
8
Sample Output :
31





switch(n = 1){
  case 1:
      a = "31 days";
      break;
  case 2:
      a = "28 days";
      break;
  default:
      a = "Error";

       
}
console.log(a);
*/

     
/*
PROBLEM 5
You are given with a number A i.e. the temperature in Celcius. Write a program to
convert this into Fahrenheit.
Note: In case of decimal values, round-off to two decimal places.
Input Description:
A number is provided in Celcius as the input of the program.
Output Description:
The output shall be the temperature converted into Fahrenheit corresponding to the
input value print up to two decimal places and round off if required.
Sample Input:
12
Sample Output:
53.60


c = 12; //celsius
f = c*(9/5) + 32;

console.log(f);
*/

/*
PROBLEM 6
Write a code to get an integer N and print the sum of values from 1 to N.
Input Description:  
A single line contains an integer N.
Output Description:  
Print the sum of values from 1 to N.
Sample Input :
10
Sample Output : 55

n =10;
a = 1+2+3+4+5+6+7+8+9+10;
console.log(a);
*/

/*
4
PROBLEM 7
You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25,
36, 49, 64, 81, .......
(Print "Error" if N = negative value and 0 if N = 0).
Input Description:  
An integer N is provided to you as the input.
Output Description:  
Find the Nth term in the provided series.
Sample Input :
18
Sample Output :
324


let n =15;

if(n<0){
    console.log("Error");
}
else if(n==0){
    console.log("0");
}
else{
    for(let i=1; i<=n; i++){
        let a = i*i;
        console.log(a);
        
    }
}
*/

/*
PROBLEM 8
- Let "A" be a string. Remove all the whitespaces and find it's length.
(Print "Error" if N = negative value and 0 if N = 0).
Input Description:  
A string is provide as an input
Output Description:  
Remove all the whitespaces and then print the length of the remaining string.
Sample Input :
Lorem Ipsum
Sample Output : 
10


let a="LoremIpsum";
a = a.trim();
console.log(a.length);
*/

/*
You are given the coefficients of a quadratic equation in order A, B & C.
Where A is the coefficient of X2, B is the coefficient of X and C is the constant
term in the most simplified form.
Example: For X2 + 5X + 6 = 0, you are given the input as: 1 5 6.
Write a program to find all of the roots of the quadratic.
Note: The output should be up to 2nd decimal place (round off if needed) and in case
of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.
Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-
b-√(b² -4ac)} / 2a


Input Description:  
Three numbers corresponding to the coefficients of x(squared), x and constant are
given as an input in that particular order
Output Description:  
Print the two values of X after rounding off to 2 decimal places if required.
Sample Input:
1 5 6
Sample Output:
-2.00 -3.00

a=1;
b=5;
c=6;
m = Math.sqrt((b*b) - 4*a*c)
m = -b+m;
m = m/2*a;

n = Math.sqrt((b*b) - 4*a*c)
n = -b-n;
n = n/2*a;

console.log(m);
console.log(n);
*/

/*
PROBLEM 13 
Ajay is given a series(In example).he gone through the series but unable to understand 
it properly,he has hired you.Your task is to understand the series and print the series 
2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series. 
Input Description: 
You will be given a number ‘n’
Output Description: 
Print the nth number of series
Sample Input :
5 
Sample Output : 
30
*/
var n = 5;

for (let i = 1; i <= n; i++) {
    var b =( (i * i) + i); //1*1= 1+1 =2 //2*2=4+2=6 //3*3=9+3=12 //4*4=16+4=20 //5*5=25+5=30
}
console.log(b);
/*
PROBLEM 14 
You are given with an array. Your task is to print the left rotated array after k 
opearations. Time:O(n) Extra Space: O(1) 
Input Description: 
First line contains two number ‘n’ and ‘k’.Next line contains n space separated 
numbers.
Output Description: 
Print the array as mentioned.
Sample Input :
7 3 
1 2 3 4 5 6 7 
Sample Output :
4 5 6 7 1 2 3
*/

// JavaScript implementation of left rotation of
// an array K number of times
let arr = [1, 2, 3, 4, 5, 6, 7];
let x = arr.length;
// Function to leftRotate array multiple times
function leftRotate(arr, x, k) {
    /* To get the starting point of rotated array */
    let mod = k % x;

    // Prints the rotated array from start position
    for (let i = 0; i < x; i++)
        console.log((arr[(mod + i) % x]) + " ");

}

let k = 3;
// Function Call
leftRotate(arr, x, k);



/*
ROBLEM 15 
You are given a postfix expression. Evaluate the given expression and print the result. 
Input Description: 
The first line of the input is a string N, containing operators and numbers seperated by 
the single space which forms a postfix expression.
Output Description: 
Evaluate the post expression and print the result.
Sample Input :
5 3 1 * + 9 -
Sample Output :
-1
*/
let exp = "5 3 1 * + 9 -";

function evaluatePostfix(exp) {     // create a stack
    let stack = [];

    // Scan all characters one by one
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];

        if (c == ' ') {
            continue;
        }

        // If the scanned character is an
        // operand (number here),extract
        // the number. Push it to the stack.
        else if (c >= '0' && c <= '9') {
            let n = 0;

            // extract the characters and
            // store it in num
            while (c >= '0' && c <= '9') {
                n = n * 10 + (c - '0');
                i++;
                c = exp[i];
            }
            i--;

            // push the number in stack
            stack.push(n);
        }

        // If the scanned character is
        // an operator, pop two elements
        // from stack apply the operator
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(parseInt(val2 / val1, 10));
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}
console.log(evaluatePostfix(exp));