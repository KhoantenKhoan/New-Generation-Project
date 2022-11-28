const popup = document.querySelector('.popup');
const body = document.querySelector('#body');
const close = document.querySelector('.close');

let renderPopup = `
<div class="contentBox">
    <div class="close"></div>
    <div class="img-popup">
        <img src="./img/banner/banner-4.png" alt="">
    </div>
    <div class="content">
        <h3>Giảm giá "So deep"</h3>
        <h2>69<sup>%</sup><span> OFF</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Odit quidem deserunt est itaque incidunt! 
            Beatae aut excepturi laudantium cupiditate saepe!
        </p>
        <a href="./shop-grid.html?idDMT=1">Mua ngay!</a>
    </div>
</div>
`

// $(document).ready(function () {

// $(".popup").hide().fadeIn(1000);
// //close the POPUP if the button with id="close" is clicked
// $(".close").on("click", function (e) {
//     e.preventDefault();
//     $(".popup").fadeOut(1000);
// });

window.onload = function(){
    setTimeout(function(){
        body.style.background = "rgb(0 0 0 / 48%)";
        popup.style.display = "block";
    }, 2000)
}

// setInterval(() => {
//     popup.innerHTML += renderPopup;
// }, 4000);

close.addEventListener('click', () => {
    popup.style.display="none";
    body.style.background = "none";

})
