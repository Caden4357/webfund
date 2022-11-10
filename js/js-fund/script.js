console.log("Connected");


function giveAlert(num){
    alert(`Hi ${num}`);
}
function changeText(element) {  
    // Change the innerText to say Clicked
    // console.log(element.innerText);
    console.log(element);
    if(element.innerText === "Clicked"){
        element.innerText = "Click";
    }else{
        element.innerText = "Clicked";
    }
    // * Adding a class to the element 
    // element.classList.add("blue");
}


function increaseAge(element) {  
    // console.log(element.innerText);
    // console.log(typeof(element.innerText))
    // * Increasing the age amount 
    var age = parseInt(element.innerText);
    age++
    element.innerText = `${age} years old`
    // element.remove();
}