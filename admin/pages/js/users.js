url = "http://localhost:3000/khachhang";
fetch(url)
  .then((res) => res.json())
  .then((list) => {
    list.forEach((kh) => {
      document.querySelector("#kh").innerHTML += `
        <tr>
            <td>${kh.id}</td>
            <td class="img"><img src="${kh.HinhAnh}" alt=""></td>
            <td>${kh.HoVaTen}</td>
            <td>${kh.TenDangNhap}</td>
            <td>${kh.MatKhau}</td>
            <td>${kh.Email}</td>
            <td>${kh.DienThoai}</td>
            <td class="des">${kh.DiaChi}</td>
            <td> <label class="badge badge-warning">${kh.idKH==0?"Admin":"Khách hàng"}</label> </td>
            <td>
                <button class="badge badge-primary sua button">Sửa</button>
                <button class="badge badge-danger xoa button">Xóa</button>
            </td>
        </tr>
		`;
    });
  });
