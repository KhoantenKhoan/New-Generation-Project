var cart = JSON.parse(localStorage.getItem("cart"));
if (cart) cart.forEach( (sp,index) => {
  document.querySelector("#giohang").innerHTML += `
    <tr>
        <td class="shoping__cart__item">
            <img src="${sp.hinhAnh}" alt="">
            <h5>${sp.tenSP.substring(0,49)}...</h5>
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
    let km = 0;
    let khuyenmai = document.getElementById("km")
    let maKhuyenMai = document.getElementById("khuyenMai")
    khuyenmai.onclick = function KhuyenMai() {
        km = khuyenmai.value.trim();
        tinhtongtien()
    };
function tinhtongtien(){
    arrTien = document.getElementsByClassName("tien");
    tongtien=0;
    for(let t of arrTien){
        // console.log(t);
        tongtien +=  parseInt(t.innerText);
    }
    tienTT = tongtien - (km != 0 ?(tongtien * (km/100)):0);
    document.getElementById("tongtien").innerText = (tongtien).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')+ " ₫";
    document.getElementById("giamgia").innerText = (km)+ " %";
    document.getElementById("tientong").innerText = (tienTT).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')+ " ₫";
    let tientong = (tienTT+(tienTT *(10/100)));
    localStorage.setItem("tientong", tientong);
}
tinhtongtien();

function deletecart(id){
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart.splice(i, 1);
        };
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    toastr.warning("Xoá sản phẩm ở giỏ hàng thành công!");
    tinhtongtien();
        setTimeout(function(){
            window.location.reload();  
        } ,1000)

}
// function deleteAll(){
//     localStorage.removeItem("cart");
//     localStorage.removeItem("tientong");
//     tinhtongtien();
//     document.location="../../index.html";
// }
