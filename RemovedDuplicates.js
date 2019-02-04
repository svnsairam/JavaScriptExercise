/*
Q5 Write a JavaScript program to remove duplicate items from an array?
*/
let input = ['abc','def','abc','pqr'];
function removeDuplicates(arr){
    let unique = [...new Set(arr)]; // Set is used to remove duplicates
    console.log(unique);
}
removeDuplicates(input);

