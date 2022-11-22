
  let count =1;
  var table = document.querySelector("#brand");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          if(row){
          table.innerHTML += `
          <tr>
          <td> ${count++}</td>
          <td>${row.tenDM}</td>
          <td>${row.trangThai}</td>
          <td>
            <a href="update-category.html?id=${key}"><button  class="badge badge-primary sua button">Sửa</button></a>
            <button class="badge badge-danger xoa button" onclick="xoasp('${key}')">Xóa</button>
          </td>
        </tr>
            `;}
        });
      })();
     
      const xoasp = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc/${id}.json`,
            {
              method: "DELETE",
            }
          );
          toastr.success("Xóa thành công!")
          window.location.reload();
        })();
      };
