/*
Q12 Write a JavaScript function that accepts two arguments,
a string and a letter and the function will    
count the number of occurrences of the specified letter within the string.
Sample arguments : 'gmail.com', 'm'
Expected output : 2
*/
let input = 'gmail.com';
function countOccurences(input,letter){
    let count=0;
    for(let i=0;i<input.length;i++){
        if(input[i]===letter){
            count++;
        }
    }
    return count;
}

console.log(countOccurences(input,'m'));


