let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang/${id}.json`;
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }

  dh={
      tenKH:document.querySelector("#tenKH").value.trim(),
      email:document.querySelector("#email").value.trim(),
      ngayDH:document.querySelector("#ngayDH").value.trim(),
      diaChi:document.querySelector("#diaChi").value.trim(),
      sdt:document.querySelector("#sdt").value.trim(),
      trangThaiDH : anHien
  }
  options = {
    method: "PUT",
    body: JSON.stringify(dh),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="oder.html";
  })

}

url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang/${id}.json`;
fetch(url)
.then(res => res.json())
.then(dh  =>{
    document.getElementById('tenKH').value = dh.tenKH;
    document.getElementById('email').value = dh.email;
    document.getElementById('ngayDH').value = dh.ngayDH;
    document.getElementById('diaChi').value = dh.diaChi;
    document.getElementById("sdt").value = dh.sdt
    document.getElementById('div_anHien').innerHTML = `
    <label class="btn btn-outline-success waves-effect waves-light m-r-10">
    <input type="radio" name="anHien" value="1" class="anHien" ${dh.trangThaiDH=="1" ? "checked" :""}>Chưa xác nhận
    </label>
    <label class="btn btn-outline-danger waves-effect waves-light">
    <input type="radio" name="anHien" value="0" class="anHien" ${dh.trangThaiDH!="1" ? "checked" :""}>Xác nhận
    </label>  
    `;
url1 = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/chiTietDonHang/${dh.id}.json`;
    fetch(url1)
.then(res => res.json())
.then(dh  =>{
    document.getElementById('tenKH').value = dh.tenKH;
    document.getElementById('email').value = dh.email;
    document.getElementById('ngayDH').value = dh.ngayDH;
    document.getElementById('diaChi').value = dh.diaChi;
    document.getElementById("sdt").value = dh.sdt
    document.getElementById('div_anHien').innerHTML = `
    <label class="btn btn-outline-success waves-effect waves-light m-r-10">
    <input type="radio" name="anHien" value="1" class="anHien" ${dh.trangThaiDH=="1" ? "checked" :""}>Chưa xác nhận
    </label>
    <label class="btn btn-outline-danger waves-effect waves-light">
    <input type="radio" name="anHien" value="0" class="anHien" ${dh.trangThaiDH!="1" ? "checked" :""}>Xác nhận
    </label>  
    `;
})
})