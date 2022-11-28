var table = document.querySelector("#locsanpham");
let search = document.getElementById("search-item");
let btn = document.getElementById("btn-search");

(async () => {
  const response = await fetch(
    "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham.json"
  );
  const data = await response.json();
  btn.onclick = function timSanPham() {
    let valueSearch = search.value;
    // console.log(valueSearch);
    // console.log(data);
    let searchData = data.filter((value) => {
      return value.tenSP.toUpperCase().includes(valueSearch.toUpperCase());
    });
    // console.log(searchData);
    render(searchData);
  };
})();
function render(array) {
  for (const [key, value] of Object.entries(array)) {
    if (value && value.trangThai == 1) {
      table.innerHTML += `
            <a href="shop-details.html?id=${value.id - 1}&idDM=${
        value.idDM
      }" class="latest-product__item">
              <div class="latest-product__item__pic">
                  <img class="img-search" src="${value.hinhAnh}" alt="">
              </div>
              <div class="latest-product__item__text">
                  <h4>${value.tenSP.toUpperCase()}</h4>
                  <h4 style="color:red;">${new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(value.gia - value.gia / value.giamGia)}</h4>
              </div>
            </a>
              `;
    }
  }
}
