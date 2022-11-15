url = "http://localhost:3000/sanpham";
fetch(url)
  .then((res) => res.json())
  .then((listSP) => {
    listSP.forEach((sp) => {
      document.querySelector("#sp").innerHTML += `
      <tr>
        <td>${sp.id}</td>
        <td>${sp.TenSP}</td>
        <td class="img"><img src="${sp.HinhAnh}" alt=""></td>
        <td>${sp.DonGia} VNĐ</td>
        <td class="text-danger"> ${sp.PhanTram} <i class="ti-arrow-down"></i></td>
        <td>${sp.NgayNhap}</td>
        <td>${sp.SoLuong}</td>
        <td> <label class="badge badge-warning">${sp.TrangThai==0?"Còn hàng":"Hết hàng"}</label> </td>
        <td>
            <a href="suasp.html?id=${sp.id}"><button class="badge badge-primary sua button">Sửa</button></a>
            <button class="badge badge-danger xoa button" onclick="xoasp('${sp.id}')" >Xóa</button>
        </td>
      </tr>
		`;
    });
  });
  function xoasp(id){
    console.log(id);
    const hoi = confirm("Bạn có muốn xóa không?")
    if (hoi==false) return;
    url=`http://localhost:3000/sanpham/${id}`;
    fetch(url,{method:"delete"})
    .then(res => res.json())
    .then(data => {
      alert("Đã xoá!");
      document.location="product.html";
    })
  }
