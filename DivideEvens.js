/*
Q3 Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8?
*/

var number = readline.question("please enter the number");
var result="";
    for(var i=0;i<number.length;i++)
    {
        
       if(parseInt(number.charAt(i))%2==0 && parseInt(number.charAt(i+1))%2==0)
       {
        result+=number.charAt(i);
        result+="-";
       }
       else{
        result+=number.charAt(i);
       }
    }
console.log(result);