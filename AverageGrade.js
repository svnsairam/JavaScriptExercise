/*
Q10 Write a JavaScript program which compute, the average marks of the following students 
Then, this average is used to determine the corresponding grade?
*/

var student = [
    {name:"David",marks:80},
    {name:"Vinoth",marks:77},
    {name:"Divya",marks:88},
    {name:"Ishitha",marks:95},
    {name:"Thomas",marks:68}
    ];
function average(student){
    let sum =0;
    for(let i=0;i<student.length;i++){
        sum = sum + student[i].marks;
        console.log(student[i].name + " "+grade(student[i].marks));
    }

    return sum/student.length;
}

let averageMarks = average(student);
console.log("Average Marks = "+averageMarks);

function grade(marks){
    if(marks<60)
    return 'F';
    else if(marks<70)
    return 'D';
    else if(marks<80)
    return 'C';
    else if(marks<90)
    return 'B';
    else
    return 'A';
 }


