

// Write a function that says hello to the user
// This function will take 1 param which will be the users name 
// function should console.log(Hello {username} Happy Wednesday)

// parameters
function sayHello(name, day) {  
    // console.log("Hello " + name + " Happy Wednesday!");
    console.log(`Hello ${name} Happy ${day}!`);
}
// Arguments
// sayHello("Colette", "Monday");


// Write a function to multiply 2 numbers together only if the 2 numbers are greater than 5 and console.log the result 
// console.log those numbers to small 
function multiply(x, y) {
    if(x > 5 && y > 5){
        console.log(x*y);
    }
    else if(x < 5 && y < 5){
        console.log(x+y);
    }
    else{
        console.log("Those numbers are too small do it yourself")
    }
    // console.log(x*y);
}
multiply(3,3);


// write a function that takes 1 param which will be a persons age 
// If they are 18 or older we will cl you can enter the club 
// otherwise cl sorry maybe next year

function enterTheClub(age) {
    if (typeof(age) == "number"){
        if(age >= 18){
            console.log("You can enter the club");
        }else{
            console.log("Maybe next year");
        }
    }else{
        console.log("you didnt provide the right information");
    }
}
enterTheClub(18);
enterTheClub("Caden");
console.log("5"+"5");

var age = "18";
console.log(typeof(age));









