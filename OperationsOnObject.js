/*
Q 14. Consider the following object:
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
Exercise 1: Display all objects with occupation as 'Programmer'
Exercise 2: Sort the object basis the age key in the descending order
Exercise 3: Recreate the above array of objects into the following object of objects :{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
Exercise 4: Use the map function to create a new array containing only names present in myObj.
*/

// Exercise1
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

let programmers = myObj.filter(obj => obj.occupation === 'Programmer');
console.log(programmers);

// Exercise2
console.log(myObj.sort(function(obj1,obj2){return (obj2.age-obj1.age);}));

// Exercise3
let result = {};
let occupationsSet = new Set();
for(let i=0;i<myObj.length;i++){
    occupationsSet.add(myObj[i].occupation);
}


 occupationsSet.forEach(currentOccupation => {
    let currentOccupationObjects = myObj.filter(obj => obj.occupation == currentOccupation);
    console.log(currentOccupation);
    let tempArrayObj = [];
    currentOccupationObjects.forEach(currentObject => {
        delete currentObject.occupation;
        tempArrayObj.push(currentObject);
    });
    console.log(tempArrayObj);
    result.currentOccupation = tempArrayObj;
});

// Exercise4
let resultMap = myObj.map(obj => obj.name);  
console.log(resultMap);