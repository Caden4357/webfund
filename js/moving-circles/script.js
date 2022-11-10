
function moveCircle(event) {  
    // console.log("here");
    // el.style.top = "500px";
    // el.style.left = "500px"
    // topPos-=20
    // el.style.top = topPos + "px"
    // leftPos-=20
    // el.style.left = leftPos + "px"
    let el = document.querySelector('.circle');
    let position = el.getBoundingClientRect();
    let x = event.clientX - position.left - position.width ;
    let y = event.clientY - position.top - position.height;
    console.log(event.pageX);
    el.style.transform = `translate(${x}px, ${y}px)`;
}

// let mm = new MagnetMouse({
//     follow: {
//         element: '.circle'
//     }
// });
// mm.init();
// new MagnetMouse({
//     follow: {
//         element: '.circle'
//     }
// });
// new MagnetMouse({
//     follow: {
//         element: '.circle'
//     },
//     inCallback: function (data) {
//         console.log(data);
//     },
//     outCallback: function (data) {
//         console.log(data);
//     }
// });
