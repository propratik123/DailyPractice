/*  *
   ***
  *****
 ******* */  


  var n = 4;
  var s = "";
  for(i=1; i<=n; i++) //using for printing rows
  {
      for(j=1; j<=n-i; j++) //using for space
      {
          s += " ";
      }
      for(k=1; k<=2*i-1; k++) //using to print * 
      {
          s += "*";

      }
      s += "\n";
      
  }
  console.log(s);





/*   *****
     ****
     ***
     **
     *        */

n=5;
var p="";
for(i=1; i<=n; i++) //using for rows
{
    for(j=1; j<=n-i+1; j++) //using for *
    {
       p += "*"; // p = "" + "*"
    }
    p += "\n";
}
console.log(p);






/*
    1 
    21
    321       for(j=1; j>=i; j--)
    4321
    54321 
*/
/*
var p ="";
for(i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        p += j;

    }
    console.log(p);
}

*/
/*
    54321
    5432
    543
    54
    5
*/



/*
a=5;
var num ="";

for(i=1; i<=a; i++){
    for(j=5; j>=i; j--){
        num += j;
    }
    
   
    num += "\n";
}
console.log(num);

*/



/*

    1
   234
  56789

  */
/*
  n = 3;
  var s = "";
  a = 1;
  for(i=1; i<=n; i++){
      for(j=2; j>=i; j--){
          s += " ";
      }
      for(k=1; k<= 2*i-1; k++){
          
         s += a++;  
      }
      s += "\n";
  }
console.log(s);

*/

/*    1
      2 3
      4 5 6
      7 8 9 10     */
/*
 n = 4;
 s = "";
 a = 1;
 for(i=1; i<=n; i++){
    
     for(k=1; k<=i; k++){

            s += a++ + " ";

         }
     
     s +="\n";

 }
console.log(s);

*/
