  let count =1;
  let table = document.querySelector("#sp");
  let currentPage = 1;
  let perPage = 5;
  let totalPage = 0;
  let item = [];
  let db = [];
  async function getData() {
    const response = await fetch(
      "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json"
    );
    const data = await response.json();
    db =  Object.values(data);
    item = db.slice(
      (currentPage - 1) * perPage,
      (currentPage - 1) * perPage + perPage
    );
    console.log(item);
    render();
    showPageNumber();
  }
  // <li class="page-item"><a class="page-link" onclick="handlePageNumber(${i})" >${i}</a></li>
  function showPageNumber() {
    totalPage = db.length / perPage;
    for (let i = 1; i <= totalPage; i++) {
      document.getElementById(
        "page"
        ).innerHTML += `
        
        <a class="btn btn-outline-primary btn_page" onclick="handlePageNumber(${i})">${i}</a>

      `;
    }
  }
  function handlePageNumber(num) {
    currentPage = num;
    item = db.slice(
      (currentPage - 1) * perPage,
      (currentPage - 1) * perPage + perPage
    );
    render();
    console.log(item);
  }

      async function render() {
        table.innerHTML=``;
        Object.keys(item).forEach((key) => {

          const row = item[key];
          
          if(row){
            const d = new Date(`${row.ngayNhap}`);
          dell = Number.parseFloat(row.id);

          table.innerHTML += `
          <tr>
                <td>${count++}</td>
                <td>${row.tenSP}</td>
                <td>
                    <img src="${row.hinhAnh}" alt="" width="100px" height="100px">
                </td>
                <td>${row.gia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</td>
                <td>${row.giamGia} %</td>
                <td>${d.getDate() + '/' + d.getMonth() + '/' +  d.getFullYear()}</td>
                <td>${row.soLuong}</td>
                <td>${row.trangThai == 1 ? '<span class="btn btn-primary">Còn Hàng</span>' : '<span class="btn btn-danger">Hết Hàng</span>'}</td>
                <td>
                  <a href="./update-product.html?id=${dell-1}"> <span class="btn btn-info">Sửa</span></a> 
                  <span onclick="xoa('${dell-1}')" class="btn btn-danger btn-del">Xóa</span>
                </td>
          </tr>
                
            `;
          }
        });
      };

      const xoa = (id) => {
        console.log(id);
        (async () => {
          await fetch(
            `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id}.json`,
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
      getData();
      showPageNumber();