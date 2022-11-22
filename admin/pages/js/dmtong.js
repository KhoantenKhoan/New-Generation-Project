
  let count =1;
  var table = document.querySelector("#brand");
      (async () => {
        const response = await fetch(
          "https://es6-phat-default-rtdb.firebaseio.com/danhMucTong.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          table.innerHTML += `
          <tr>
          <td>${row.id}</td>
          <td>${row.tenDMT}</td>
          <td>
            <a href="suadanhmuc.html?id=${key}"><button  class="badge badge-primary sua button">Sửa</button></a>
            <button class="badge badge-danger xoa button" onclick="xoasp('${key}')">Xóa</button>
          </td>
        </tr>
            `;
        });
      })();

      const xoasp = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://es6-phat-default-rtdb.firebaseio.com/danhMucTong/${id}.json`,
            {
              method: "DELETE",
            }
          );
          window.location.reload();
        })();
      };
  
