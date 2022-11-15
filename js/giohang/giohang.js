var cart = JSON.parse(localStorage.getItem("cart"));
if (cart) cart.forEach( (sp,index) => {
  document.querySelector("#giohang").innerHTML += `
    <tr>
        <td class="shoping__cart__item">
            <img src="${sp.hinhAnh}" alt="">
            <h5>${sp.tenSP}</h5>
        </td>
        <td class="shoping__cart__price">
            ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sp.gia)} 
        </td>
        <td class="shoping__cart__quantity">
            <div class="quantity">
                <div class="pro-qty">
                    <input value="${sp.soluong}" type="text" onkeyup="tinhtien(${sp.gia},this.value, ${index})" >
                </div>
            </div>
        </td>
        <td class="shoping__cart__total"  >
                <div class="tien"> ${sp.soluong*sp.gia} </div>
            
        </td>
        <td class="shoping__cart__item__close">
            <span onclick="deletecart(${sp.id})" class="icon_close"></span>
        </td>
    </tr>

  `
})
function tinhtien(gia, soluong, i){
    let tien = gia*soluong;
    document.getElementsByClassName("tien")[i].innerText = tien+" VNĐ";
    tinhtongtien();
}
function tinhtongtien(){
    arrTien = document.getElementsByClassName("tien");
    tongtien=0;
    for(let t of arrTien){
        tongtien +=  parseInt(t.innerText);
    }
    document.getElementById("tongtien").innerText = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tongtien);

    document.getElementById("tientong").innerText = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tongtien);
    let tientong = (tongtien+(tongtien/10));
    localStorage.setItem("tientong", tientong);
}
tinhtongtien();

function deletecart(id){
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart.splice(i, 1);
        }
    }
    localStorage.setItem("cart",JSON.stringify([]));
    tinhtongtien();
    document.location="../../index.html"
}
function deleteAll(){
    localStorage.setItem("cart",JSON.stringify([]));
    localStorage.setItem("tientong",0);
    tinhtongtien();
    document.location="../../index.html";
}
let soluong = 0;
if(cart!=null){
    cart.forEach(item => {
        soluong += Number(item.soluong);
    })
    localStorage.setItem("soluong", soluong);
}else{
    localStorage.setItem("soluong", soluong);
}