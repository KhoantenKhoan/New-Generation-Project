var cart = JSON.parse(localStorage.getItem("cart"));
if (cart) cart.forEach( (sp,index) => {
  document.querySelector("#giohang").innerHTML += `
    <tr>
        <td class="shoping__cart__item">
            <img src="${sp.hinhAnh}" alt="">
            <h5>${sp.tenSP}</h5>
        </td>
        <td class="shoping__cart__price">
        ${sp.gia.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '')} ₫
        </td>
        <td class="shoping__cart__quantity">
            <div class="quantity">
                <div class="pro-qty">
                    <input value="${sp.soluong}" type="number" onchange="tinhtien(${sp.gia},this.value, ${index})" >
                </div>
                
            </div>
        </td>
        <td class="shoping__cart__total"  >
                <div class="tien">  ${sp.gia.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '')} ₫	</div>
            
        </td>
        <td class="shoping__cart__item__close">
            <span onclick="deletecart(${sp.id})" class="icon_close"></span>
        </td>
    </tr>

  `
})
function tinhtien(gia, soluong, i){
    let tien = gia*soluong;
    document.getElementsByClassName("tien")[i].innerText = (tien).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '') + " ₫";
    tinhtongtien();
}
function tinhtongtien(){
    arrTien = document.getElementsByClassName("tien");
    tongtien=0;
    for(let t of arrTien){
        console.log(t);
        tongtien +=  parseInt(t.innerText);
    }
    document.getElementById("tongtien").innerText = (tongtien).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')+ " ₫";

    document.getElementById("tientong").innerText = (tongtien).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')+ " ₫";
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