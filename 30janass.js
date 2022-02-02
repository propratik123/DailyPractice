/*
    1 
    21
    321       for(j=1; j>=i; j--)
    4321
    54321 
*/

n = 5;
var z ="";
for(i=1; i<=n; i++){
    for(j=i; j>=1; j--){
        z += j;
    }
    z += "\n";
}
console.log(z);



/*
    54321
    5432
    543
    54
    5
*/




a=5;
var num ="";

for(var i=1; i<=a; i++){
    for(j=5; j>=i; j--){
        num += j;
    }
    
   
    num += "\n";
}
console.log(num);
