url = "http://localhost:3000/donhang";
fetch(url)
  .then((res) => res.json())
  .then((listDH) => {
    listDH.forEach((dh) => {
      document.querySelector("#dh").innerHTML += `
        <tr>
            <td>${dh.id}</td>
            <td>${dh.idKH}</td>
            <td>${dh.TenKH}</td>
            <td>${dh.NgayDatHang}</td>
            <td>${dh.DiaChi}</td>
            <td>${dh.DienThoai}</td>
            <td>${dh.GhiChu}</td>
            <td> <label class="badge badge-warning">${dh.TrangThai}</label> </td>
            <td>
                <button class="badge badge-primary sua button">Sửa</button>
                <button class="badge badge-danger xoa button">Xóa</button>
            </td>
        </tr>
		`;
    });
  });
