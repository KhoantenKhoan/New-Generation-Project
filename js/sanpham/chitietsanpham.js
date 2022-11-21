import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();
const product2 = new FireBaseService();
const comment = new FireBaseService();
const member = new FireBaseService();
(async () => {
let params = new URLSearchParams(location.search);
let id_item = params.get("id");

var table = document.querySelector("#product_detail");
          
const response = await fetch(
    `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id_item}.json`
  );
  const product = await response.json();
    // console.log(product);
    if(product) {
      table.innerHTML += `
    <div class="col-lg-6 col-md-6">
        <div class="product__details__pic">
            <div class="product__details__pic__item">
                    <img class="product__details__pic__item--large" src="${product.hinhAnh}" alt="">
            </div>
        </div>
    </div>
        <div class="col-lg-6 col-md-6">
            <div class="product__details__text">
                <h3>${product.tenSP.toUpperCase()}</h3>
                <div class="product__details__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <span>${product.luotXem} Lượt xem</span>
                </div>
                <div class="product__details__price">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.gia - (product.gia / product.giamGia))}</div>
                <p>${product.moTa}</p>
                <div class="product__details__quantity">
                    <div class="quantity">
                        <div class="pro-qty">
                            <input type="number" value="1">
                        </div>
                    </div>
                </div>
                <a  onclick="giohang(${id_item},'${product.tenSP}',${product.gia - (product.gia / product.giamGia)},'${product.hinhAnh}')" class="primary-btn">Thêm vào giỏ hàng</a>
                <ul>
                    <li><b>Tình trạng</b> <span>${product.trangThai=="1"?"Còn hàng":"Hết hàng"}</span></li>
                    <li><b>Vận chuyển</b> <span>trong ngày khu vực HCM.</span></li>
                    <li><b>Share on</b>
                        <div class="share">
                            <a ><i class="fa fa-facebook"></i></a>
                            <a ><i class="fa fa-twitter"></i></a>
                            <a ><i class="fa fa-instagram"></i></a>
                            <a ><i class="fa fa-pinterest"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        `;
    }
}
)();

async function renderComment() {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    console.log(id);

    let response1 = await comment.getAll('binhLuan');
    let response2 = await member.getAll('khachHang');
      
    let data1 = await response1.json();
    let data2 = await response2.json();

    let content = ``;

    if (data1, data2) {
        for (const [key1, value1] of Object.entries(data1)) 
            for (const [key2, value2] of Object.entries(data2)){
                // console.log(value1.idSP);
                // console.log(value1.idSP-"1");
                if (value1.idSP-"1" == id) {
                    // console.log(value2);
                    content += `
                    <div class="card text-dark">
                        <div class="card-body p-4">
                            <h4 class="mb-0">Bình luận, đánh giá sản phẩm</h4>
                            <p class="fw-light mb-4 pb-2">Đánh giá của những người khác</p>

                            <div class="d-flex flex-start">
                                <img class="rounded-circle shadow-1-strong me-3"
                                    src="${value2.hinhAnh}" alt="avatar"
                                    width="60" height="60" />
                                <div class="show__comment">
                                    <h6 class="fw-bold mb-1">${value2.tenKH}</h6>
                                    <div class="d-flex align-items-center mb-3">
                                        <p class="mb-0">
                                            ${value1.ngay}
                                        </p>
                                    </div>
                                    <p class="mb-0" style="color:dark;">
                                        ${value1.noiDung}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr class="my-0" />
                    </div>
                `;
            }
        }
    }
      document.getElementById('comment').innerHTML += content;
}
renderComment();

async function showProduct() {
    let params = new URLSearchParams(location.search);
    let id_item = params.get("id");
    let id_item1 = params.get("idDM");

    const response = await fetch(
        `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id_item}.json`
      );
    let response2=await product.getAll('sanPham');
    
    let data2 = await response2.json();

    let content = ``;
    
    if (data2) {
        for (const [key, value] of Object.entries(data2) ) {
            if( value.idDM == id_item1 && key != id_item){
        if (value) {
            content += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="">
                        <a  href="shop-details.html?id=${key}&idDM=${value.idDM}">
                              <img src="${value.hinhAnh}" alt="">
                            </a>
                            <ul class="product__item__pic__hover">
                                <a  onclick="giohang(${key},'${value.tenSP}',${value.gia - (value.gia / value.giamGia)},'${value.hinhAnh}')" href="">
                                <i class="fa fa-shopping-cart"></i>
                                </a>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <div class="product__item__name ">
                                <h6>
                                    <a href="shop-details.html?id=${key}&idDM=${value.idDM}">${(value.tenSP).toUpperCase()}</a>
                                </h6>
                            </div>
                            <div class="featured__item_old_price">
                              <p style="text-decoration: line-through;">${value.gia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
                            </div>
                            <div class="featured__item_new_price">
                              <h5 style="color:red;">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia - (value.gia / value.giamGia))} </h5>
                            </div>
                        </div>
                    </div>
                </div>
            
            `;
    }
    }
    }
    }
    document.getElementById('locsanpham').innerHTML = content;
  }
  showProduct();