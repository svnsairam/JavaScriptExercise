/*
Q8 Write a pattern that matches e-mail addresses?
a.Uppercase (A-Z) and lowercase (a-z) English letters.
b.Digits (0-9).
c.Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
d.Character . ( period, dot or fullstop) provided that it   is not the first or last character and it will not come   one after the other.
*/

let emailPattern = /^\w+[.-]?\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let email = 'svnsr4123@gmail.com';
let matches = emailPattern.test(email);

if(matches){
    console.log("valid email");
}else{
    console.log('invalid email')
}



