/*
Q7 Write a JavaScript function to sort the following array of objects by title value?
*/
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    
 var result=[];
 var result=library.sort(function(obj1,obj2){return obj1.title>obj2.title});
 console.log(result);



