/*
Q2 Write a JavaScript conditional statement to find the largest of five numbers?
*/

var numArray = [44,55,66,11,8];
if (numArray[0] > numArray[1] && numArray[0] > numArray[2] && numArray[0] > numArray[3] && numArray[0] > numArray[4]) {
    console.log(numArray[0]);
    }
    else if (numArray[1] > numArray[2] && numArray[1] > numArray[3] && numArray[1] > numArray[4]) {
    console.log(numArray[1]);
    }
    else if (numArray[2] > numArray[3] && numArray[2] > numArray[4]) {
    console.log(numArray[2]);
    }
    else if (numArray[3] > numArray[4]) {
    console.log(numArray[3]);
    } 
    else {
    console.log(numArray[4]); 
    }
