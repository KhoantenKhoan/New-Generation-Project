btnluu = document.querySelector("#btnluu");
  
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc.json";
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
  
  danhMuc={
    tenDM: document.querySelector("#ten").value.trim(),
    idDMT : document.querySelector("#dmt").value.trim(),
    trangThai : anHien
  }
  options = {
    method: "POST",
    body: JSON.stringify(danhMuc),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    toastr.success("Thêm thành công!");
    setTimeout(function () {
      document.location="category.html";
      
    },1000)
  })
}
var table1 = document.querySelector("#dmt");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          table1.innerHTML += `
          <option value="${key}">${row.tenDMT}</option>
            `;
        });
      })();