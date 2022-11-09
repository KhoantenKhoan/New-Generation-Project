let nav = document.getElementById("nav");
let navBar = document.getElementById("navbar");
let bs = document.getElementById("bs-megadropdown-tabs");
let boxCart = document.getElementById("box-cart");
let clearFix = document.getElementById("clearfix");
window.onscroll = function() {stick()};

function stick() {
    if (document.body.scrollTop || document.documentElement.scrollTop > 34) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.width = "100%"
        nav.style.height = "50px"
        nav.style.paddingTop = "8px"
        nav.style.zIndex = "1000"
        nav.style.backgroundColor = "black";
        bs.style.backgroundColor = "black"
        boxCart.style.margin = "0"
        boxCart.style.padding = "5px"
        clearFix.style.backgroundColor = "black"
    } else {
        nav.style.position = "initial";
        nav.style.backgroundColor = "white";
        nav.style.paddingTop = "0px"
        nav.style.height = "34px"
        boxCart.style.margin = "10px"
        bs.style.backgroundColor = "white";
        clearFix.style.backgroundColor = "white ";

    }
}