btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url="http://localhost:3000/sanpham";
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
    method: "POST",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="product.html";
  })
}

url="http://localhost:3000/DanhMuc";
fetch(url)
.then(res => res.json())
.then(listLoai =>{
  listLoai.forEach(loai =>{
    document.getElementById("idloai").innerHTML +=`
      <option value="${loai.id}">${loai.id}-${loai.TenDM}</option>
    `;
  })
})
