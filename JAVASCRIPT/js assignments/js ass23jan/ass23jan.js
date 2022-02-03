


/* 

Pattern 1:-

1
22
333
4444
55555 

*/

var valueToprint = "";
for(var i = 1; i <= 5; i++) {
       
        for(var j = 1; j <= i; j++) {
          valueToprint += i;  //valueToprint= "" + i; i = 2
        }
        valueToprint += "\n";
     }
     console.log(valueToprint);
    

/* Output:-

1
22
333
4444
55555

*/




/* 

Pattern 2:-

    #    
   ##
  ###
 ####
#####

*/
var n = 5;
var valueToprint = "";
for(var i = 1; i <= n; i++) //for loop for printing rows
    {
       
        for(var j = 0; j < n - i; j++) {
          valueToprint += " ";
        }
          for(var k =1; k <= i; k++) {
          valueToprint += "#";
         }
     valueToprint += "\n";
}
     console.log(valueToprint);

     /*

     Output:-

    #
   ##
  ###
 ####
#####


*/













