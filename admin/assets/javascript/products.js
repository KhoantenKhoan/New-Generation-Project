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
    db = data;
    item = db.slice(
      (currentPage - 1) * perPage,
      (currentPage - 1) * perPage + perPage
    );
    console.log(item);
    render();
    showPageNumber();
  }
  function showPageNumber() {
    totalPage = db.length / perPage;
    for (let i = 1; i < totalPage; i++) {
      document.getElementById(
        "page"
      ).innerHTML += `<a onclick="handlePageNumber(${i})">${i}</a>`;
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

function handlePageNumber(num) {
    currentPage=num
    console.log(currentPage);
}
      async function render() {
        Object.keys(item).forEach((key) => {

          const row = item[key];
          
          if(row){
          table.innerHTML += `
          <tr>
                <td>${count++}</td>
                <td>${row.tenSP}</td>
                <td>
                    <img src="${row.hinhAnh}" alt="" width="100px" height="100px">
                </td>
                <td>${row.gia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</td>
                <td>${row.giamGia} %</td>
                <td>${row.ngayNhap}</td>
                <td>${row.soLuong}</td>
                <td>${row.trangThai == 1 ? '<span class="btn btn-primary">Còn Hàng</span>' : '<span class="btn btn-danger">Hết Hàng</span>'}</td>
                <td>
                  <a href="./update-product.html?id=${key}"> <span class="btn btn-info">Sửa</span></a> 
                  <span onclick="xoa('${key}')" class="btn btn-danger btn-del">Xóa</span>
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
          window.location.reload();
        })();
      };
      getData();
      showPageNumber();