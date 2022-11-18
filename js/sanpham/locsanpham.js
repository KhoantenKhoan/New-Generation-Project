import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();

async function showProduct() {
    let params = new URLSearchParams(location.search);
    let id_item = params.get("idDMT");
    let id_item1 = params.get("idDM");

    let response=await product.getAll('sanPham');
    let response1=await product.getAll('danhMuc');
    
    let data = await response.json();
    let data1 = await response1.json();

    let content = ``;

if (data , data1) {
    for (const [key, value] of Object.entries(data)) {
        console.log(value);
        if(id_item == value.idDMT )
        if (value) {
            content += `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="${value.hinhAnh}">
                        <a  href="shop-details.html?id=${key}">
                        <img src="${value.hinhAnh}" alt="">
                        </a>
                            <ul class="product__item__pic__hover">
                            <li><a  onclick="giohang(${key},'${value.tenSP}',${value.gia - (value.gia / value.giamGia)},'${value.hinhAnh}')" href=""><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                        <h6><a ref="shop-details.html?id=${key}">${(value.tenSP).toUpperCase()}</a></h6>
                            <p style="text-decoration: line-through;">${value.gia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
                            <h5 style="color:red;">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia - (value.gia / value.giamGia))} </h5>
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
