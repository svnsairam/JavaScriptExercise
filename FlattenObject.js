/*
Q13 Flatten the following object:var myObj = [5, [22], [[14]], [[4]],[5,6]]
Note: the output should be in the form:[ 5, 22, 14, 4, 5, 6 ]
*/

let myObj = [5, [22], [[14]], [[4]],[5,6]];
let elements = [];
function flatten(myObj){
    for(let i=0;i<myObj.length;i++)
    {
        if(myObj[i].length>0){
            flatten(myObj[i]);
        }
        else{
            elements.push(myObj[i]);
        }
    }

}
flatten(myObj);
console.log(elements);


