
// url = "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json";
// fetch(url)
//   .then((res) => res.json())
//   .then((listSP) => {
//     listSP.forEach((sp) => {
//       if(sp){
//       document.querySelector("#sp").innerHTML += `
//       <tr>
//         <td>${count++}</td>
//         <td>${sp.tenSP}</td>
//         <td class="img"><img src="${sp.hinhAnh}" alt=""></td>
//         <td>${sp.gia} VNĐ</td>
//         <td class="text-danger"> ${sp.giamGia} <i class="ti-arrow-down"></i></td>
//         <td>${sp.ngayNhap}</td>
//         <td>${sp.soLuong}</td>
//         <td>${sp.moTa}</td>
//         <td>${sp.luotXem}</td>
//         <td> <label class="badge badge-warning">${sp.trangThai==1?"Còn hàng":"Hết hàng"}</label> </td>
//         <td>
//             <a href="suasp.html?id=${sp.id}"><button class="badge badge-primary sua button">Sửa</button></a>
//             <button class="badge badge-danger xoa button" onclick="xoasp('${sp.id}')" >Xóa</button>
//         </td>
//       </tr>
// 		`;}
//     });
//   });
  
//   const xoasp = (id) => {
//     console.log(id);
//     (async () => {
//       await fetch(
//         `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id}.json`,
//         {
//           method: "DELETE",
//         }
//       );
//       window.location.reload();
//     })();
//   };

  let count =1;
  var table = document.querySelector("#sp");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          table.innerHTML += `
          <tr>
        <td>${count++}</td>
        <td>${row.tenSP}</td>
        <td class="img"><img src="${row.hinhAnh}" alt=""></td>
        <td>${row.gia} VNĐ</td>
        <td class="text-danger"> ${row.giamGia} <i class="ti-arrow-down"></i></td>
        <td>${row.ngayNhap}</td>
        <td>${row.soLuong}</td>
        <td>${row.moTa}</td>
        <td>${row.luotXem}</td>
        <td> <label class="badge badge-warning">${row.trangThai==1?"Còn hàng":"Hết hàng"}</label> </td>
        <td>
            <a href="suasp.html?id=${key}"><button class="badge badge-primary sua button">Sửa</button></a>
            <button class="badge badge-danger xoa button" onclick="xoa('${key}')" >Xóa</button>
        </td>
      </tr>
            `;
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