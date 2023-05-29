//  Home section
const bar = document.getElementById('bar');
const navi = document.getElementById('nav_bar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        navi.classList.add('active');

    })
}
if (close) {
    close.addEventListener('click', () => {
        navi.classList.remove('active');

    })
}
// Shop section

let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small_img");

smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}