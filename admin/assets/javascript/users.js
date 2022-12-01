
  let count =1;
  var table = document.querySelector("#kh");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          if(row){
          table.innerHTML += `
          <tr>
          <td>${count++}</td>
          <td>${row.tenKH}</td>
          <td>${row.matKhau}</td>
          <td class="img"><img src="${row.hinhAnh}" alt=""></td>
          <td class="des">${row.diaChi}</td>
          <td>${row.email}</td>
          <td>${row.sdt}</td>
          <td> <label class="badge badge-warning">${row.vaiTro==0?'<span class="btn btn-primary">Khách hàng</span>' : '<span class="btn btn-danger">Admin</span>'}</label> </td>
          <td>
            <a href="update-user.html?id=${key}"><button  class="badge badge-primary sua button">Sửa</button></a>
            <button class="badge badge-danger xoa button" onclick="xoa('${key}')">Xóa</button>
          </td>
        </tr>
            `;}
        });
      })();

      const xoa = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang/${id}.json`,
            {
              method: "DELETE",
            }
          );
          window.location.reload();
        })();
      };