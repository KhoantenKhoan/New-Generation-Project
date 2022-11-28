

btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json";
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
  sp={
      tenKH:document.querySelector("#tenKH").value.trim(),
      email:document.querySelector("#email").value.trim(),
      matKhau:document.querySelector("#matKhau").value.trim(),
      hinhAnh:document.querySelector("#hinhAnh").value.trim(),
      diaChi:document.querySelector("#diaChi").value.trim(),
      sdt:document.querySelector("#sdt").value.trim(),
      vaiTro : anHien
  }
  options = {
    method: "POST",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="member.html";
  })
}