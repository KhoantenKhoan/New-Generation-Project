let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`http://localhost:3000/sanpham/${id}`;
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
  sp={
    TenSP: document.querySelector("#ten").value.trim(),
    MoTaSP: document.querySelector("#mota").value.trim(),
    HinhAnh: document.querySelector("#hinh").value.trim(),
    NgayNhap: document.querySelector("#ngay").value.trim(),
    DonGia: document.querySelector("#gia").value.trim(),
    idDM: document.querySelector("#idloai").value.trim(),
    SoLuong: document.querySelector("#soluong").value.trim(),
    PhanTram: document.querySelector("#giamgia").value.trim(),
    TrangThai : anHien
  }
  options = {
    method: "PUT",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="product.html";
  })
}

// url="http://localhost:3000/DanhMuc";
// fetch(url)
// .then(res => res.json())
// .then(listLoai =>{
//   listLoai.forEach(loai =>{
//     document.getElementById("idloai").innerHTML +=`
//       <option value="${loai.id}">${loai.id}-${loai.TenDM}</option>
//     `;
//   })
// })
url = `http://localhost:3000/sanpham/${id}`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById('ten').value = sp.TenSP;
    document.getElementById('mota').value = sp.MoTaSP;
    document.getElementById('hinh').value = sp.HinhAnh;
    document.getElementById('ngay').value = sp.NgayNhap;
    document.getElementById('gia').value = sp.DonGia;
    document.getElementById('idloai').value = sp.idDM;
    document.getElementById("soluong").value = sp.SoLuong
    document.getElementById("giamgia").value = sp.PhanTram;
    document.getElementById('div_anHien').innerHTML = `
        <input type="radio" name="anHien" value="1" class="anHien" ${sp.TrangThai=="1" ? "checked" :""}>Hết Hàng
        <input type="radio" name="anHien" value="0" class="anHien" ${sp.TrangThai!="1" ? "checked" :""}> Còn Hàng
    `;
})