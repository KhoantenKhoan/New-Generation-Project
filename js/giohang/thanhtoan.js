var cart = JSON.parse(localStorage.getItem("cart"));

function checkMemberExist() {
    if(localStorage.getItem("member") == null){
        localStorage.setItem('checkLoginCart', 0);
        toastr.warning('Bạn phải đăng nhập mới được thanh toán!')
        window.location.href = './login.html';
    }
}

checkMemberExist();

if (cart) cart.forEach( (sp,index) => {
  document.querySelector("#sanpham").innerHTML += `
        <li>
            <div class="checkout__order__name">
                ${sp.tenSP} x ${sp.soluong}
            </div>
            <div class="checkout_order_total">
                <span class="tien" style="display: none;">
                    ${sp.gia*sp.soluong} 
                </span>
                <span >
                    ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sp.gia*sp.soluong)} 
                </span>
            </div>
        </li>
  `
})

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

document.getElementById("btn-datHang").onclick = function() {
    hoTen = document.getElementById("hoTen").value.trim();
    email = document.getElementById("email").value.trim();
    sdt = document.getElementById("sdt").value.trim();
    diaChi = document.getElementById("diaChi").value.trim();
    ghiChu = document.getElementById("ghiChu").value.trim();
    phuongThucTT = document.getElementById("phuongThucTT").value.trim();
    if(hoTen=="") {
        toastr.warning("Bạn chưa nhập Họ và Tên");
        return;
    }
    if(email=="") {toastr.warning("Bạn chưa nhập email"); return;}
    if(sdt=="") {toastr.warning("Bạn chưa nhập số điện thoại"); return;}
    if(diaChi=="") {toastr.warning("Bạn chưa nhập Địa chỉ"); return;}
    let donHang = {
        "idKM":"1",
        "idKH": "1",
        "tenKH": hoTen,
        "email": email,
        "diaChi": diaChi,
        "sdt": sdt,
        "ghiChuKH": ghiChu,
        "ghiChuAdmin": "",
        "phuongThucTT": phuongThucTT,
        "ngayDH": new Date().toISOString().slice(0,10),
        "trangThaiDH": "Chờ xác nhận"
    }
    toastr.success("Đặt hàng thành công");
    url = "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang.json";
    options = {
        method: "POST",
        body:JSON.stringify(donHang),
        headers: {"Content-Type": "application/json"}
    }
    fetch(url,options).then( res => res.json())
    .then(data =>{
        // console.log(data);
        maDH = data.name;
        // console.log(maDH);
        luuChiTietDonHang(maDH);
    })
}
function luuChiTietDonHang(maDH) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let tientong = JSON.parse(localStorage.getItem('tientong'));
    cart.forEach(sp =>{
        let objSP={
            "donGia": tientong,
            "hinhAnh": sp.hinhAnh,
            "idDH": maDH,
            "idSP": sp.id,
            "soLuong": sp.soluong,
            "tenSP": sp.tenSP,

        }
        url = "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/chiTietDonHang.json";
        options = {
            method: "POST",
            body:JSON.stringify(objSP),
            headers: {"Content-Type": "application/json"}
        }
        fetch(url,options).then( res => res.json())
        .then(d =>{
            localStorage.setItem("cart",JSON.stringify([]));
            localStorage.setItem("tientong",0);
            toastr.success("Đặt hàng thành công!");
            document.location="index.html";
        })
    })
}