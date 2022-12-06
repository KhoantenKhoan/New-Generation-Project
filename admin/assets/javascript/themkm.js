btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khuyenMai.json";
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
  km={
      khuyenMai:document.querySelector("#khuyenMai").value.trim(),
      giamGia:document.querySelector("#giamGia").value.trim(),
      trangThai : anHien
  }
  options = {
    method: "POST",
    body: JSON.stringify(km),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    toastr.success("Thêm thành công!");
    setTimeout(function () {
      
      document.location="khuyenmai.html";
    },1000)
  })
}