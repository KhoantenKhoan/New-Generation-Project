
  let count =1;
  var table = document.querySelector("#kh");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          // console.log(row);
          // console.log(key);
          if(row){
          table.innerHTML += `
          <tr>
          <td>${count++}</td>
          <td style="text-overflow: ellipsis; font-size: 12px">${row.tenKH}</td>
          <td>${row.password}</td>
          <td class="img"><img src="${row.hinhAnh}" alt="${row.tenKH}"></td>
          <td style="text-overflow: ellipsis;" class="des">${row.diaChi}</td>
          <td>${row.email}</td>
          <td>${row.sdt}</td>
          <td> <label>${row.vaiTro==0?'<span class="btn btn-primary">Khách hàng</span>' : '<span class="btn btn-danger">Admin</span>'}</label> </td>
          <td>
            <a href="update-user.html?id=${key}"><button  class="btn btn-info">Sửa</button></a>
            <button class="btn btn-danger btn-del" onclick="xoa('${key}')">Xóa</button>
          </td>
        </tr>
            `;}
        });
      })();

      const xoa = (id) => {
        // console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang/${id}.json`,
            {
              method: "DELETE",
            }
          );
          toastr.success("Xóa thành công!");
          setTimeout(function () {
      
            window.location.reload();
          },1000)
        })();
      };