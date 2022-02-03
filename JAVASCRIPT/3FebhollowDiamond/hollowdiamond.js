/*

     *
    * *
   *   *
    * *
     *     
*/

n=2;
var p="";

for(var i=1; i<=n; i++){
    for(var j=1; j<=n-i+1; j++){
        p += " ";
    }
    for(var k=1; k<=i; k++){
        p += "*"+" ";
    }
    p += "\n";
}
m=1;
for(i=1; i<=m; i++){
    for(k=1; k<=2; k++){
        p += "*"+" "+" "+" ";
    }
    p += "\n";
}
b=2;
for(i=1; i<=b; i++){
    for(j=1; j<=i; j++){
        p += " ";
    }
    for(k=1; k<=b+1-i; k++){
        p += "*"+" ";
    }
    p += "\n";
}
console.log(p);