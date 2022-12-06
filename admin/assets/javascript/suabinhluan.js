let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/binhLuan/${id}.json`;
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }

  bl={
      ngay:document.querySelector("#ngay").value.trim(),
      noiDung:document.querySelector("#noiDung").value.trim(),
  }
  options = {
    method: "PUT",
    body: JSON.stringify(bl),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    toastr.success("Sửa thành công!")
    setTimeout(function () {
      document.location="binhLuan.html";
      
    },1000)
  })
}

url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/binhLuan/${id}.json`;
fetch(url)
.then(res => res.json())
.then(bl  =>{
    document.getElementById('ngay').value = bl.ngay;
    document.getElementById('noiDung').value = bl.noiDung
     
})