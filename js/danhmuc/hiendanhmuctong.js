import { FireBaseService } from "../API/firebaseService.js";
const brand = new FireBaseService();

async function showBrand() {
  
    let response=await brand.getAll('danhMucTong');
    
    let data = await response.json();
    // console.log(data);
    let content = ``;
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (value) {
          content += `
          <li class="rightmenu">
            <a href="shop-grid.html?id=${value.id}">${value.tenDMT}</a>
            <ul class="nav-menu" id="navmenu">
              <li><a href="#">qqqaaaaaaaaaaaaaaaaaaa</a></li>
              <li>ccc</li>
              <li>vvv</li>
            </ul>
          
          </li>
          
          `;
        }
      }
    }
    document.getElementById('mainmenu').innerHTML = content;
  }
  showBrand();
  // <li><a href="categories.html?id=${key}">${value.tenLoai}</a></li>