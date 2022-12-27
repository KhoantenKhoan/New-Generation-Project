let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc/${id}.json`;
  var check = document.getElementsByClassName('anHien');
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked === true) {
      anHien = check[i].value;
      console.log(anHien);
    }
  }
  sp={
    tenDM: document.querySelector("#ten").value.trim(),
    id: document.querySelector("#id").value.trim(),
    idDMT : document.querySelector("#dmt").value.trim(),
    trangThai : anHien
  }
  options = {
    method: "PUT",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    toastr.success("Sửa thành công!")
    setTimeout(function () {
      document.location="category.html";
      
    },1000)
  })
}
url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc/${id}.json`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById('ten').value = sp.tenDM;
    document.getElementById("dmt").value= sp.idDMT,
    document.getElementById("id").value= sp.id,
    document.getElementById('div_anHien').innerHTML = `
    <label class="btn btn-outline-success waves-effect waves-light m-r-10">
    <input type="radio" name="anHien" value="1" class="anHien" ${sp.trangThai=="1" ? "checked" :""}>Còn hàng
    </label>
    <label class="btn btn-outline-danger waves-effect waves-light">
    <input type="radio" name="anHien" value="0" class="anHien" ${sp.trangThai!="1" ? "checked" :""}> Hết hàng
    </label>  
    `;

    
})
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