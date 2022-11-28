import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();

    // let currentPage = 1;
    // let perPage = 6;
    // let totalPage =0;
    // let item = [];

// async function showPageNumber() {
//     let params = new URLSearchParams(location.search);
//     let id_item = params.get("idDMT");
    
//     let response=await product.getAll('sanPham');
    
//     let data = await response.json();
//     // for (const [key, value] of Object.entries(data)) {
//     // if(id_item == value.idDMT ){
//     totalPage = 25 / perPage
//     for (let i = 1; i < totalPage; i++) {
//         document.getElementById("page").innerHTML += `<a onclick="handlePageNumber(${i})">${i}</p>`;
//     }
//     // }    
// // }
// }

// function handlePageNumber(num) {
//     currentPage=num
//     console.log(currentPage);
// }

async function showProduct() {
    let params = new URLSearchParams(location.search);
    let id_item = params.get("idDMT");
    let id_item1 = params.get("idDM");

    let response=await product.getAll('sanPham');
    let response1=await product.getAll('danhMuc');
    
    let data = await response.json();
    let data1 = await response1.json();

    let content = ``;
        
        // item= data.slice(
        //     (currentPage - 1)*perPage,
        //     (currentPage - 1)*perPage+perPage
        // )

if (data , data1) {
    for (const [key, value] of Object.entries(data)) {
        if(id_item == value.idDMT )
        if (value && value.trangThai== 1 ) {
            content += `
            <div class="col-lg-4 col-md-6 col-sm-6 cover__product">
                <div class="product__item">
                    <div class="product__item__pic set-bg">
                    <a  href="shop-details.html?id=${key}&idDM=${value.idDM}">
                    <img src="${value.hinhAnh}" alt="">
                  </a>
                            <ul class="product__item__pic__hover">
                                <li>
                                    <a  onclick="giohang(${key},'${value.tenSP}',${value.gia - value.gia * (value.giamGia/100)},'${value.hinhAnh}')" href="">
                                        <i class="fa fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                        <div class="product__item__name">
                        <h6><a href="shop-details.html?id=${key}&idDM=${value.idDM}">${(value.tenSP).toUpperCase()}</a></h6>
                      </div>
                            <div class="product__item__old_price">
                                <p style="text-decoration: line-through;">${value.gia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
                            </div>
                            <div class="product__item__price">
                                <h5 style="color:red;">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia - value.gia * (value.giamGia/100))} </h5>
                            </div>
                    </div>
                </div>
            </div>
            `;
    }
    }
    }
    document.getElementById('locsanpham').innerHTML = content;
  }
  showProduct();
//   showPageNumber();