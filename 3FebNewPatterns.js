
/*
*********
 *******
  *****
   ***
    *
    
*/
n = 5;
var s = "";
for(var i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        s += " " ;
    }
    for(k=0; k<2*(n-i)-1; k++){
        s += "*";
    }
    s += "\n";
}
console.log(s);

/*
   *********
    *******
     *****
      ***
       *
      ***
     *****
    *******
   *********   */  

    var n = 5;
    let string = "";
    // Reversed pyramid pattern
    for (let i = 0; i < n; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < (n - i) * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    // pyramid pattern
    for (let i = 2; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);


/*
       *
      ***
     *****
    *******
   *********
    *******
     *****
      ***
       *       
*/
m=5;
p = "";

for(var i=1; i<=5; i++){
    for(var j=1; j<=m-i; j++){
        p += " ";
    }   
    for(var k=1; k<=2*i-1; k++){
        p += "*";
    }
    p += "\n";
}
b =4;
for(i=1; i<=b; i++){
    for(j=1; j<=i; j++){
        p += " ";
    }
    for(k=1; k<=2*(b-i)+1; k++){
        p += "*";
    }  
    p += "\n";
}
console.log(p);



