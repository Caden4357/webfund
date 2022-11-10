console.log("Working");


// select popup div with queryselector
var popup = document.querySelector('.popup');
var cartAmount = document.querySelector('span');
// display popup after 10 seconds
setTimeout(function () {  
    popup.style.display = "block"
}, 10000)

// remove popup after button is clicked
function removePopup() {  
    popup.remove();
    // popup.style.display = "none"
}

// Search alert 
function searchAlert(event, element) {  
    // event.preventDefault();
    var formData = new FormData(element);
    console.log(formData.get('search-bar'));
    alert(formData.get('search-bar'));
}

function increaseCart() {  
    cartAmount.innerText++;
}
