let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong/${id}.json`;
  var check = document.getElementsByClassName('anHien');
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked === true) {
      anHien = check[i].value;
      console.log(anHien);
    }
  }
  sp={
    tenDMT: document.querySelector("#ten").value.trim(),
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
      document.location="dmTong.html";
      
    },1000)
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
url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong/${id}.json`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById('ten').value = sp.tenDMT;
    document.getElementById('div_anHien').innerHTML = `
    <label class="btn btn-outline-success waves-effect waves-light m-r-10">
    <input type="radio" name="anHien" value="1" class="anHien" ${sp.trangThai=="1" ? "checked" :""}>Còn hàng
    </label>
    <label class="btn btn-outline-danger waves-effect waves-light">
    <input type="radio" name="anHien" value="0" class="anHien" ${sp.trangThai!="1" ? "checked" :""}> Hết hàng
    </label>  
    `;

    
})