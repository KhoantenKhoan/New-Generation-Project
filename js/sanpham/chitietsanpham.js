import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();
const product2 = new FireBaseService();
const comment = new FireBaseService();
const member = new FireBaseService();
(async () => {
let params = new URLSearchParams(location.search);
let id_item = params.get("id");

var table = document.querySelector("#product_detail");
let response1=await product.getAll('danhMuc');
          
const response = await fetch(
    `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id_item}.json`
  );
  const product = await response.json();
    console.log(product);
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
                <a href="#" onclick="giohang(${id_item},'${product.tenSP}',${product.gia - (product.gia / product.giamGia)},'${product.hinhAnh}')" class="primary-btn">Thêm vào giỏ hàng</a>
                <a href="#" style="color:white" class="heart-icon"><span class="icon_heart_alt"></span></a>
                <ul>
                    <li><b>Tình trạng</b> <span>Còn hàng</span></li>
                    <li><b>Vận chuyển</b> <span>trong ngày khu vực HCM.</span></li>
                    <li><b>Share on</b>
                        <div class="share">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        `;
    }
})();

async function renderComment() {
    let params = new URLSearchParams(location.search);
    // let id = params.get("id");
    // console.log(id);

    let id = 1;
    // let idMember = 1;
    let response1 = await product2.getAll('sanPham');
    let response2 = await member.getAll('khachHang');
      
    let data = await response.json();
    let data1 = await response1.json();
    let data2 = await response2.json();

    console.log(data2);

    let content = ``;

    let response = await fetch(
        `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/binhLuan.json?orderBy="product_id"&"member_id"&equalTo=${id}`
    )
    

    // if (data) {
    //     for (const [key, value] of Object.entries(data)) {
    //         console.log(value);
    //         if (value) {
    //             content += `
    //                 <div class="card text-dark">
    //                     <div class="card-body p-4">
    //                         <h4 class="mb-0">Bình luận, đánh giá sản phẩm</h4>
    //                         <p class="fw-light mb-4 pb-2">Đánh giá của những người khác</p>

    //                         <div class="d-flex flex-start">
    //                             <img class="rounded-circle shadow-1-strong me-3"
    //                                 src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar"
    //                                 width="60" height="60" />
    //                             <div class="show__comment">
    //                                 <h6 class="fw-bold mb-1">Maggie Marsh</h6>
    //                                 <div class="d-flex align-items-center mb-3">
    //                                     <p class="mb-0">
    //                                         ${value.ngay}
    //                                     </p>
    //                                 </div>
    //                                 <p class="mb-0">
    //                                     ${value.noiDung}
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <hr class="my-0" />
    //                 </div>
    //             `;
    //         }
    //     }
    // }
      document.getElementById('comment').innerHTML += content;
}
renderComment();