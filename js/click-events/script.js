

function message() {  
    alert('Alert from JS');
}
function changeText(element) {  
    console.log("Button");
    element.innerText = "Clicked"
}


function changeHeader(el) {  
    var header = document.querySelector('#header');
    // console.log(header);
    header.innerText = "I love JS"
}

function increaseAge(el) {  
    console.log(typeof(el.innerText));
    el.innerText++;
}
function hoverChangeImg() {  
    // Code goes here
}