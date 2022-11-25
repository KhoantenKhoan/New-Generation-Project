import { FireBaseService } from "../API/firebaseService.js";
const brand = new FireBaseService();

async function showBrand() {
    let params = new URLSearchParams(location.search);
    let id_item = params.get("idDMT");
    let response=await brand.getAll('danhMuc');
    let response2=await brand.getAll('danhMucTong');
    
    let data = await response.json();
    let data2 = await response2.json();
    // console.log(data2);
    let content = ``;
    if (data2) {
      for (const [key, value] of Object.entries(data2)) {
        if (value && value.trangThai== 1 ) {
          if(id_item == value.id ){
            content += `
            <h2>${value.tenDMT}</h2>
            <div class="breadcrumb__option">
                <a href="./index.html">Trang chủ</a>
                <span>Sản phẩm</span>
            </div>
            `;
          }
      }
      }
    }
    document.getElementById('tieude').innerHTML = content;
  }
  showBrand();
