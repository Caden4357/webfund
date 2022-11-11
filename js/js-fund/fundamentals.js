//* Strings
var fName = "Caden";

//* Numbers
var age = 25;
var dec = 3.14;

//* boolean
var isHuman = false;
age = 35;
// * mathematical operators

// console.log(age+dec);
// console.log(age-dec);
// console.log(age*dec);
// console.log(age/dec);

//* two different ways of writing the same thing this is string concatenation 
console.log("My name is " + fName + " I am " + age + " years old");
console.log(`My name is ${fName} I am ${age+dec} Years old`);

// Declaring a function with 2 parameters
function addNums(a, b){
    // console.log(fName + age);
    var result = a+b
    // console.log(result);
    return result
}

//* Calling function and providing the 2 arguments
// addNums(20,20);

//* Return vs console.log NOTE: return stops the function
var result = addNums(40,40);
console.log(result);
// var result2 = addNums("Ahmed", "Is cool");
// console.log(result);
// console.log(result2);

//* = vs == vs ===
console.log(10 === "10");







