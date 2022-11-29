
  let count =1;
  var table = document.querySelector("#dh");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang.json"
        );
        const response1 = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/chiTietDonHang.json"
        );
        const data = await response.json();
        const data1 = await response1.json();
        
        Object.keys(data).forEach((key) => {
        Object.keys(data1).forEach((key1) => {
          const row = data[key];
          const row1 = data1[key1];
          console.log(row1);
          console.log(key1);
          if(row){
          table.innerHTML += `
          <tr>
          <td>${count++}</td>
          <td>${row.tenKH}</td>
          <td>${row.email}</td>
          <td>${row.ngayDH}</td>
          <td class="des">${row.diaChi}</td>
          <td>${row.sdt}</td>
          <td>${row1.tenSP}</td>
          <td>${row1.hinhAnh}</td>
          <td>${row1.donGia}</td>
          <td>${row1.soLuong}</td>
          <td> <label class="badge badge-warning">${row.trangThaiDH}</label> </td>
          <td>
            <a href="update-donhang.html?id=${key}"><button  class="badge badge-primary sua button">Sửa</button></a>
            <button class="badge badge-danger xoa button" onclick="xoa('${key}')">Xóa</button>
          </td>
        </tr>
            `;}
          });
        });
      })();

      const xoa = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang/${id}.json`,
            {
              method: "DELETE",
            }
          );
          window.location.reload();
        })();
      };
