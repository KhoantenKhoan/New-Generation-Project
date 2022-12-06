btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json";
  var check = document.getElementsByClassName('anHien');
      for (var i = 0; i < check.length; i++) {
        if (check[i].checked === true) {
          anHien = check[i].value;
          console.log(anHien);
        }
      }
  sp={
    idDMT : document.querySelector("#dmt").value.trim(),
    idDM : document.querySelector("#dm").value.trim(),
    tenSP: document.querySelector("#ten").value.trim(),
    moTa: document.querySelector("#mota").value.trim(),
    hinhAnh: document.querySelector("#hinh").value.trim(),
    ngayNhap: document.querySelector("#ngay").value.trim(),
    gia: document.querySelector("#gia").value.trim(),
    giamGia:document.querySelector("#giamgia").value.trim(),
    soLuong: document.querySelector("#soluong").value.trim(),
    trangThai : anHien
  }
  options = {
    method: "POST",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    toastr.success("Thêm thành công!");
    setTimeout(function () {
      
      document.location="product.html";
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

var table = document.querySelector("#dm");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          table.innerHTML += `
          <option value="${key}">${row.tenDM}</option>
            `;
        });
      })();
