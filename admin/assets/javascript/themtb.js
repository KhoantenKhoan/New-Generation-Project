btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/thongBao.json";
  var check = document.getElementsByClassName('anHien');
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked === true) {
      anHien = check[i].value;
      console.log(anHien);
    }
  }
  thongBao={
    idKM : document.querySelector("#km").value.trim(),
    hinhAnh: document.querySelector("#hinh").value.trim(),
    ngayDang: document.querySelector("#ngay").value.trim(),
    
    trangThai:anHien
   
   
  }
  options = {
    method: "POST",
    body: JSON.stringify(thongBao),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="thongBao.html";
  })
}
var table1 = document.querySelector("#km");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khuyenMai.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          table1.innerHTML += `
          <option value="${key}">${row.khuyenMai}</option>
            `;
        });
      })();