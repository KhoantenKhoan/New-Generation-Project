let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khuyenMai/${id}.json`;
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
  km={
    khuyenMai: document.querySelector("#khuyenMai").value.trim(),
    giamGia: document.querySelector("#giamGia").value.trim(),
    trangThai : anHien
  }
  options = {
    method: "PUT",
    body: JSON.stringify(km),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="khuyenmai.html";
  })
  console.log(km)
}

url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khuyenMai/${id}.json`;
fetch(url)
.then(res => res.json())
.then(km  =>{
    document.getElementById('khuyenMai').value = km.khuyenMai;
    document.getElementById('giamGia').value = km.giamGia;
    document.getElementById('div_anHien').innerHTML = `
    <label class="btn btn-outline-success waves-effect waves-light m-r-10">
    <input type="radio" name="anHien" value="1" class="anHien" ${km.trangThai=="1" ? "checked" :""}>Còn hạn
    </label>
    <label class="btn btn-outline-danger waves-effect waves-light">
    <input type="radio" name="anHien" value="0" class="anHien" ${km.trangThai!="1" ? "checked" :""}> Hết hạn
    </label>  
    `;
})