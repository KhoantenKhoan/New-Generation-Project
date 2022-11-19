url = "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang.json";
fetch(url)
  .then((res) => res.json())
  .then((listDH) => {
    listDH.forEach((dh) => {
      document.querySelector("#dh").innerHTML += `
        <tr>
            <td>${dh.id}</td>
            <td>${dh.tenKH}</td>
            <td>${dh.email}</td>
            <td>${dh.ngayDH}</td>
            <td>${dh.diaChi}</td>
            <td>${dh.sdt}</td>
            <td> <label class="badge badge-warning">${dh.trangThaiDH}</label> </td>
            <td>
                <button class="badge badge-primary sua button">Sửa</button>
                <button class="badge badge-danger xoa button">Xóa</button>
            </td>
        </tr>
		`;
    });
  });
