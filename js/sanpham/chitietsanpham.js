import { FireBaseService } from "../API/firebaseService.js";
const product = new FireBaseService();
const product2 = new FireBaseService();
const comment = new FireBaseService();
const member = new FireBaseService();
let params = new URLSearchParams(location.search);
let id_item = params.get("id");
(async () => {

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
                <p style="text-align:justify">${product.moTa}</p>
                <div class="product__details__quantity">
                    <div class="quantity">
                        <div class="pro-qty">
                            <input type="number" value="1">
                        </div>
                    </div>
                </div>
                <a id="addToCart" onclick="giohang(${id_item},'${product.tenSP}',${product.gia - (product.gia / product.giamGia)},'${product.hinhAnh}')" class="primary-btn text-white">Thêm vào giỏ hàng</a>
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
        <input type="hidden" id="idDMT" value="${product.idDMT}">
      <input type="hidden" id="idDM" value="${product.idDM}">
      <input type="hidden" id="tenSP" value="${product.tenSP}">
      <input type="hidden" id="moTa" value="${product.moTa}">
      <input type="hidden" id="hinhAnh" value="${product.hinhAnh}">
      <input type="hidden" id="ngayNhap" value="${product.ngayNhap}">
      <input type="hidden" id="gia" value="${product.gia}">
      <input type="hidden" id="giamGia" value="${product.giamGia}">
      <input type="hidden" id="soLuong" value="${product.soLuong}">
      <input type="hidden" id="trangThai" value="${product.trangThai}">
      <input type="hidden" id="luotXem" value="${product.luotXem + 1}">
        `;
    }
    let luotXem = document.querySelector("#luotXem").value.trim();
    let lx = Number.parseFloat(luotXem);
    let sp={
        idDMT : document.querySelector("#idDMT").value.trim(),
        idDM : document.querySelector("#idDM").value.trim(),
        tenSP: document.querySelector("#tenSP").value.trim(),
        moTa: document.querySelector("#moTa").value.trim(),
        hinhAnh: document.querySelector("#hinhAnh").value.trim(),
        ngayNhap: document.querySelector("#ngayNhap").value.trim(),
        gia: document.querySelector("#gia").value.trim(),
        giamGia:document.querySelector("#giamGia").value.trim(),
        soLuong: document.querySelector("#soLuong").value.trim(),
        trangThai : document.querySelector("#trangThai").value.trim(),
        luotXem: lx,
      }
    let options = {
      method: "PUT",
      body: JSON.stringify(sp),
      headers: {'Content-Type':'application/json'}
    }
    fetch(`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id_item}.json`, options).then(res => res.json())
    .then(data =>{
    //   document.location="product.html";
    })
}
)();

async function renderComment() {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");

    let response1 = await comment.getAll('binhLuan');
    let response2 = await member.getAll('khachHang');
      
    let data1 = await response1.json();
    let data2 = await response2.json();

    let content = ``;

    if (data1, data2) {
        console.log(id);
        for (const [key1, value1] of Object.entries(data1)) 
            for (const [key2, value2] of Object.entries(data2)){
                console.log(key1
                    );
                if (value1.idSP == id && value1.idKH == value2.id || key1 == id && value1.idKH == key2) {
                    // console.log(value2);
                    content += `
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
                            <br>
                        
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
            if( value.idDM == id_item1 && key != id_item && value.trangThai == 1){
        if (value) {
            content += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="product__item">
                                <div class="product__item__pic set-bg">
                                <a  href="shop-details.html?id=${key}&idDM=${value.idDM}">
                                <img src="${value.hinhAnh}" alt="">
                            </a>
                                <ul class="product__item__pic__hover">
                                    <li>
                                    <a  onclick="giohang(${key},'${value.tenSP}',${value.gia - value.gia * (value.giamGia/100)},'${value.hinhAnh}')" ><i class="fa fa-shopping-cart"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                            <div class="product__item__name">
                            <h6><a href="shop-details.html?id=${key}&idDM=${value.idDM}">${value.tenSP.toUpperCase().substring(0,49)}</a></h6>
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
    }
    document.getElementById('locsanpham').innerHTML = content;
  }
  showProduct();