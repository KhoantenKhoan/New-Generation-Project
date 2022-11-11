var nav = document.getElementById("header");
var menuHeight = nav.clientHeight;
        
console.log(menuHeight)
    if(window.scrollHeight > 126) {
        nav.style.display = 'fixed';
        nav.style.top = 0;
        
    }else{
        nav.style.display = 'block';
    }