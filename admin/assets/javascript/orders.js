
  let count =1;
  var table = document.querySelector("#dh");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang.json"
        );
        
        const data = await response.json();
        
        Object.keys(data).forEach((key) => {
          const row = data[key];
          if(row){
          table.innerHTML += `
          <tr>
          <td>${count++}</td>
          <td>${row.tenKH}</td>
          <td>${row.email}</td>
          <td>${row.ngayDH}</td>
          <td class="des">${row.diaChi}</td>
          <td>${row.sdt}</td>
          <td> <label class="badge badge-warning">${row.trangThaiDH}</label> </td>
          <td>
            <a href="update-donhang.html?id=${key}&idDH=${row.id}"><button  class="badge badge-primary sua button">Sửa</button></a>
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
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang/${id}.json`,
            {
              method: "DELETE",
            }
          );
          window.location.reload();
        })();
      };
