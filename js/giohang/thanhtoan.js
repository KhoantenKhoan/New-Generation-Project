var cart = JSON.parse(localStorage.getItem("cart"));
var member = JSON.parse(localStorage.getItem("member"));
function checkMemberExist() {
    if(localStorage.getItem("member") == null){
        localStorage.setItem('checkLoginCart', 0);
        toastr.warning('Bạn phải đăng nhập mới được thanh toán!')
        window.location.href = './login.html';
    }
}

checkMemberExist();

(async () => {
    const response = await fetch(
        "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json"
      );
      const data = await response.json();
      const response1 = await fetch(
        "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json"
      );
      const data1 = await response1.json();
      Object.keys(data).forEach((key) => {
        const row = data[key];
      if(row && row.email == member){
            document.getElementById("hoTen").value = row.tenKH
            document.getElementById("email").value = row.email
            document.getElementById("sdt").value = row.sdt
            document.getElementById("diaChi").value = row.diaChi
            document.getElementById("idKH").value = key
        }
      })
      Object.keys(data1).forEach((key1) => {
        const row1 = data1[key1];
        document.getElementById("idKM").value = key1
      })
})();

if (cart) cart.forEach( (sp,index) => {
  document.querySelector("#sanpham").innerHTML += `
        <li>
            <div class="checkout__order__name">
                ${sp.tenSP.toUpperCase().substring(0,15)}... x ${sp.soluong}
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
    let km = 0;
    let khuyenmai = document.getElementById("km")
    let maKhuyenMai = document.getElementById("khuyenMai")
    khuyenmai.onclick = function KhuyenMai() {
        km = khuyenmai.value.trim();
        tinhtongtien()
    };
    tienTT = tongtien - (km != 0 ?(tongtien * (km/100)):0);
    function tinhtongtien(){
        arrTien = document.getElementsByClassName("tien");
        tongtien=0;
        for(let t of arrTien){
            // console.log(t);
            tongtien +=  parseInt(t.innerText);
        }
        document.getElementById("tongtien").innerText = (tongtien).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')+ " ₫";
        tienTT = tongtien - (km != 0 ?(tongtien * (km/100)):0);
        document.getElementById("giamgia").innerText = (km)+ " %";
        document.getElementById("tientong").innerText = (tienTT).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')+ " ₫";
        let tientong = (tienTT+(tienTT *(10/100)));
        localStorage.setItem("tientong", tientong);
    }
tinhtongtien();

document.getElementById("btn-datHang").onclick = function() {
    hoTen = document.getElementById("hoTen").value.trim();
    email = document.getElementById("email").value.trim();
    sdt = document.getElementById("sdt").value.trim();
    diaChi = document.getElementById("diaChi").value.trim();
    idKH = document.getElementById("idKH").value.trim();
    ghiChu = document.getElementById("ghiChu").value.trim();
    phuongThucTT = document.getElementById("phuongThucTT").value.trim();
    idKM = document.getElementById("idKM").value.trim();
    if(hoTen=="") {
        toastr.warning("Bạn chưa nhập Họ và Tên");
        return;
    }
    if(email=="") {toastr.warning("Bạn chưa nhập email"); return;}
    if(sdt=="") {toastr.warning("Bạn chưa nhập số điện thoại"); return;}
    if(diaChi=="") {toastr.warning("Bạn chưa nhập Địa chỉ"); return;}
    let donHang = {
        "idKM":idKM,
        "idKH": idKH,
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
        console.log(data);
        maDH = data.name;
        console.log(maDH);
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
            localStorage.removeItem("cart");
            localStorage.removeItem("tientong");
            toastr.success("Đặt hàng thành công!");
            document.location="index.html";
        })
    })
}