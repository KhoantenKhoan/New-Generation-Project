let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang/${id}.json`;
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
    method: "PUT",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="member.html";
  })
}

url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang/${id}.json`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById('tenKH').value = sp.tenKH;
    document.getElementById('email').value = sp.email;
    document.getElementById('matKhau').value = sp.matKhau;
    document.getElementById('hinhAnh').value = sp.hinhAnh;
    document.getElementById('diaChi').value = sp.diaChi;
    document.getElementById("sdt").value = sp.sdt
    document.getElementById('div_anHien').innerHTML = `
    <label class="btn btn-outline-success waves-effect waves-light m-r-10">
    <input type="radio" name="anHien" value="1" class="anHien" ${sp.trangThai=="1" ? "checked" :""}>admin
    </label>
    <label class="btn btn-outline-danger waves-effect waves-light">
    <input type="radio" name="anHien" value="0" class="anHien" ${sp.trangThai!="1" ? "checked" :""}>user
    </label>  
    `;
})