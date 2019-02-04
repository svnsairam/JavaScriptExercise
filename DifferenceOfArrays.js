/*
Q6 Write a JavaScript function to find the difference of two arrays?
*/
function array_diffence (array1, array2) {
    var temp = [], difference = [];
    for (var i = 0; i < array1.length; i++) {
        temp[array1[i]] = true;
    }
    for (var i = 0; i < array2.length; i++) {
        if (temp[array2[i]]) {
            delete temp[array2[i]];
        } else {
            temp[array2[i]] = true;
        }
    }
    for (var k in temp) {
        difference.push(k);
    }
    return difference;
}
console.log(array_diffence(['a', 'b'], ['a', 'b', 'c', 'd']));
