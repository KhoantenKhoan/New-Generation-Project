let member = document.querySelector("#khachHang");

let render = `
        <div style="text-align: center;">

            <h3>Bạn cần phải đăng nhập!</h3>
            <a class="btn btn-primary" href="index.html">Về trang chủ</a>
        </div>    
`
var checkMember = JSON.parse(localStorage.getItem("member"));
if(checkMember){
    member.innerHTML += render;
}