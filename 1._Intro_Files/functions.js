/* 
function addition(a, b) {
    return a + b;
}

console.log(addition(2, 6));

 */

 const meObject = {"hobby": "fun"}

 function introduce() {
     console.log("Hello there")
 }

 const shoo = function() {
     console.log("GO AWAY!")
 }

 const aboutMe = function(me) {
     console.log("My hobby is", me.hobby);
 }


function findPerson(whatToDoAfterFindingAPerson) {
    console.log("Found a person");
    whatToDoAfterFindingAPerson();
}

findPerson(introduce);



findPerson(shoo);

aboutMe(meObject);

//Arrow function that is called callingLater that takes the function calling as a parameter

function calling() {
    console.log("calling NOW!");
}

callingLater = (calling) => {
    calling();
}  

callingLater(calling);