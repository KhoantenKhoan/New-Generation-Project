import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();
   async function showProduct() {
  
    let response=await product.getAll('sanPham');
    
    let data = await response.json();
    // console.log(data);
    let content = ``;
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        // console.log(value);
        if (value) {
          if (value.giamGia > 10) {
            content += `
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges ${value.idDM}">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="${value.hinhAnh}">
                        <img src="${value.hinhAnh}" alt="">
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                        <h6><a href="single.html?id=${key}">${value.tenSP}</a></h6>
                            <p style="text-decoration: line-through;">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia)} </p>
                            <h5 style="color:red;">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia - (value.gia / value.giamGia))} </h5>
                        </div>
                    </div>
                </div>
              `;
            }
        }
      }
    }
    document.getElementById('danhsach').innerHTML += content;
  }
  showProduct();
//   <div class="product-item men">
// 							<div class="product discount product_filter">
// 								<div class="product_image">
// 									<img src="${value.urlHinh}" alt="">
// 								</div>
// 								<div class="favorite favorite_left"></div>
// 								<div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
// 								<div class="product_info">
// 									<h6 class="product_name"><a href="single.html?id=${key}"> ${value.tenSach}</a></h6>
// 									<div class="product_price">${value.gia} VNĐ<span>50000 VNĐ</span></div>
// 								</div>
// 							</div>
// 							<div>
// 							<button onclick="giohang(${key},'${value.tenSach}',${value.gia},'${value.urlHinh}')" class="red_button add_to_cart_button"><a href="#">add to cart</a></button>
// 							</div>
// 						</div>
// 						</div>