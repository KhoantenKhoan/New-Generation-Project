let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id}.json`;
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
url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id}.json`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById('ten').value = sp.tenSP;
    document.getElementById('mota').value = sp.moTa;
    document.getElementById('hinh').value = sp.hinhAnh;
    document.getElementById('ngay').value = sp.ngayNhap;
    document.getElementById('gia').value = sp.gia;
    document.getElementById('idloai').value = sp.tenDM;
    document.getElementById("soluong").value = sp.soLuong
    document.getElementById("giamgia").value = sp.giamGia;
    document.getElementById('div_anHien').innerHTML = `
        <input type="radio" name="anHien" value="1" class="anHien" ${sp.TrangThai=="1" ? "checked" :""}>Hết Hàng
        <input type="radio" name="anHien" value="0" class="anHien" ${sp.TrangThai!="1" ? "checked" :""}> Còn Hàng
    `;
})