
  let count =1;
  var table = document.querySelector("#km");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khuyenMai.json"
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
          <td>${row.khuyenMai}</td>
          <td>${row.giamGia}</td>
          <td> <label class="btn btn-primary">${row.trangThai==1?"Còn hạn":"</span class='btn btn-warning'>Hết hạn</span>"}</label> </td>
          <td>
            <a href="update-khuyenmai.html?id=${key}"><button  class="btn btn-info">Sửa</button></a>
            <button class="btn btn-danger btn-del" onclick="xoa('${key}')">Xóa</button>
          </td>
        </tr>
            `;}
        });
      })();

      const xoa = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khuyenMai/${id}.json`,
            {
              method: "DELETE",
            }
          );
          window.location.reload();
        })();
      };