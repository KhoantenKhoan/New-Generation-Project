  let count =1;
  let table = document.querySelector("#sp");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json"
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
                <td>${row.tenSP}</td>
                <td>
                    <img src="${row.hinhAnh}" alt="" width="150px" height="150px">
                </td>
                <td>${row.gia}</td>
                <td>${row.giamGia}</td>
                <td>${row.ngayNhap}</td>
                <td>${row.soLuong}</td>
                <td>${row.trangThai == 1 ? '<span class="btn btn-primary">Còn</span>' : '<span class="btn btn-danger">Hết</span>'}</td>
                <td>
                  <a href="./update-product.html?id=${key}"> <span class="btn btn-info">Sửa</span></a> 
                  <span onclick="xoa('${key}')" class="btn btn-danger btn-del">Xóa</span>
                </td>
          </tr>
                
            `;
          }
        });
      })();

      const xoa = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id}.json`,
            {
              method: "DELETE",
            }
          );
          window.location.reload();
        })();
      };

      // <td class="product__id">${count++}</td>
      //       <td class="product__name" style="width: 200px!important">${row.tenSP}</td>
      //       <td class="product__img img"><img src="${row.hinhAnh}" alt=""></td>
      //       <td class="product__price">${row.gia} VNĐ</td>
      //       <td class="text-danger product__discount"> ${row.giamGia} <i class="ti-arrow-down"></i></td>
      //       <td class="product__date">${row.ngayNhap}</td>
      //       <td class="product__number">${row.soLuong}</td>
      //       <td class="product__discription">${row.moTa}</td>
      //       <td class="product__watch">${row.luotXem}</td>
      //       <td> <label class="badge badge-warning">${row.trangThai==1?"Còn hàng":"Hết hàng"}</label> </td>
      //       <td>
      //           <a href="suasp.html?id=${key}"><button class="badge badge-primary sua button">Sửa</button></a>
      //           <button class="badge badge-danger xoa button" onclick="xoa('${key}')" >Xóa</button>
      //       </td>