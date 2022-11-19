url = "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json";
fetch(url)
  .then((res) => res.json())
  .then((list) => {
    list.forEach((kh) => {
      document.querySelector("#kh").innerHTML += `
        <tr>
            <td>${kh.id}</td>
            <td>${kh.tenKH}</td>
            <td>${kh.matKhau}</td>
            <td class="img"><img src="${kh.hinhAnh}" alt=""></td>
            <td class="des">${kh.diaChi}</td>
            <td>${kh.email}</td>
            <td>${kh.sdt}</td>
            <td> <label class="badge badge-warning">${kh.idKH==0?"Admin":"Khách hàng"}</label> </td>
            <td>
                <button class="badge badge-primary sua button">Sửa</button>
                <button class="badge badge-danger xoa button">Xóa</button>
            </td>
        </tr>
		`;

    });
  });
