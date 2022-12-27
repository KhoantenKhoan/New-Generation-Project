let count = 1;
var table = document.querySelector("#brand");
let currentPage = 1;
let perPage = 5;
let totalPage = 0;
let item = [];
let db = [];
async function getData() {
  const response = await fetch(
    "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc.json"
  );
  const data = await response.json();
  
  db =  Object.values(data);
  console.log(db);
  item = db.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  render();
  showPageNumber();
}
function showPageNumber() {
  totalPage = db.length / perPage;
  for (let i = 1; i <= totalPage; i++) {
    document.getElementById(
      "page"
    ).innerHTML += `<a class="btn btn-outline-primary btn_page" onclick="handlePageNumber(${i})">${i}</a>`;
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
function render() {
  table.innerHTML=``;
  Object.keys(item).forEach((key) => {
    const row = item[key];
    if (row) {
      dell = Number.parseFloat(row.id);
      table.innerHTML += `
          <tr>
          <td> ${count++}</td>
          <td>${row.tenDM}</td>
          <td>${
            row.trangThai == "1"
              ? '<span class="btn btn-primary">Còn Hàng</span>'
              : '<span class="btn btn-danger">Hết Hàng</span>'
          }</td>
          <td>
            <a href="update-category.html?id=${dell-1}"><button  class="btn btn-info">Sửa</button></a>
            <button class="btn btn-danger btn-del" onclick="xoasp('${dell-1}')">Xóa</button>
          </td>
        </tr>
            `;
    }
  });
}

const xoasp = (id) => {
  (async () => {
    await fetch(
      `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc/${id}.json`,
      {
        method: "DELETE",
      }
    );
    toastr.success("Xóa thành công!");
    window.location.reload();
  })();
};
getData();
showPageNumber();
