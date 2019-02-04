/*
Q11 Write a JavaScript function that returns a passed string    with letters in alphabetical order?
Example string : 'webmaster'
Expected Output : 'abeemrstw'
*/
let string1 = 'webmaster';
function AlphabetSort(string1) { 
    let arraySplit = string1.split("");
    let arraySort = arraySplit.sort();
    let arrayJoin = arraySort.join("");
    return arrayJoin;
}
console.log(AlphabetSort(string1));



