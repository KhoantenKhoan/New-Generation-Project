
  let count =1;
  var table = document.querySelector("#brand");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong.json"
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
          <td>${row.tenDMT}</td>
          <td>
          ${row.trangThai=="1"?'<span class="btn btn-primary">Còn Hàng</span>' : '<span class="btn btn-danger">Hết Hàng</span>'}
          </td>
          <td>
            <a href="suadanhmuc.html?id=${key}"><button  class="btn btn-info">Sửa</button></a>
            <button class="btn btn-danger btn-del" onclick="xoasp('${key}')">Xóa</button>
          </td>
        </tr>
            `;}
        });
      })();

      const xoasp = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong/${id}.json`,
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
  
