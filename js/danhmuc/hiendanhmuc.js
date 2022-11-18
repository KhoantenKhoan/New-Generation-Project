import { FireBaseService } from "../API/firebaseService.js";
const brand = new FireBaseService();

async function showBrand() {
    let params = new URLSearchParams(location.search);
    let id_item = params.get("idDMT");
    let response=await brand.getAll('danhMuc');
    let response2=await brand.getAll('danhMucTong');
    
    let data = await response.json();
    let data2 = await response2.json();
    // console.log(data);
    let content = ``;
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (value) {
          if(id_item == value.idDMT ){
            content += `
              <li><a class="nav__link" href="shop-grid-2.html?idDMT=${value.idDMT}&idDM=${value.id}">${value.tenDM}</a></li>
            `;
          }
      }
      }
    }
    document.getElementById('navmenu').innerHTML = content;
  }
  showBrand();
