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
        for(const [key1, value1] of Object.entries(data1)){
            console.log(value);
            if(id_item == value1.idDMT){
        if (value1) {
            content += `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="${value1.hinhAnh}">
                        <a  href="shop-details.html?id=${key1}">
                        <img src="${value1.hinhAnh}" alt="">
                        </a>
                            <ul class="product__item__pic__hover">
                            <li><a  onclick="giohang(${key1},'${value1.tenSP}',${value1.gia - (value1.gia / value1.giamGia)},'${value1.hinhAnh}')" href=""><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                        <h6><a ref="shop-details.html?id=${key1}">${(value1.tenSP).toUpperCase()}</a></h6>
                            <p style="text-decoration: line-through;">${value1.gia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ₫</p>
                            <h5 style="color:red;">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value.gia - (value.gia / value.giamGia))} </h5>
                    </div>
                </div>
            </div>
            `;
        }
      }
    }
    }
    }
    document.getElementById('locsanpham').innerHTML = content;
  }
  showProduct();
