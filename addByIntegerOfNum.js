//First, we pass in 3 as the arguement. You may use any number, this is just an example.
//Then, we make 'y' equal to 0. 
//Next, we run a for loop which starts at 1 and loops through the 'num' plus 1, incremented by 1.  
//Then, we return 'y' which is equal to y+1.
//So translated it runs 1+2+3, which will console log 6.
//Happy coding!




  function SimpleAdding(num) { 
    var y=0;
    for (var i=1; i<num+1; i++){
       y=y+i;
       }
    return y; 
  }
console.log(SimpleAdding(3));