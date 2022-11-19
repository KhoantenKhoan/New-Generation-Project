btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json";
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
  sp={
    tenSP: document.querySelector("#ten").value.trim(),
    moTa: document.querySelector("#mota").value.trim(),
    hinhAnh: document.querySelector("#hinh").value.trim(),
    ngayNhap: document.querySelector("#ngay").value.trim(),
    gia: document.querySelector("#gia").value.trim(),
    tenDM: document.querySelector("#idloai").value.trim(),
    soLuong: document.querySelector("#soluong").value.trim(),
    giamGia: document.querySelector("#giamgia").value.trim(),
    trangThai : anHien
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



url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc.json";
fetch(url)
.then(res => res.json())
.then(listLoai =>{
  listLoai.forEach(loai =>{
    document.getElementById("idloai").innerHTML +=`
      <option value="${loai.id}">${loai.id}-${loai.tenDM}</option>
    `;
  })

})
