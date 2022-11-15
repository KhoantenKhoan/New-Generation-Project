import { FireBaseService } from "../API/firebaseService.js";
const brand = new FireBaseService();

async function showBrand() {
  
    let response=await brand.getAll('danhMuc');
    
    let data = await response.json();
    console.log(data);
    let content = ``;
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (value) {
          content += `
            <li><a href="shop-grid.html?id=${value.id}">${value.tenDM}</a></li>
          `;
        }
      }
    }
    document.getElementById('navmenu').innerHTML = content;
  }
  showBrand();
  import { FireBaseService } from "./firebaseService.js";
const product = new FireBaseService();
(async () => {
let params = new URLSearchParams(location.search);
let id_item = params.get("id");

var table = document.querySelector("#sach");
          
const response = await fetch(
    `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc/${id_item}.json`
  );
  const data = await response.json();
    console.log(data);
    if(data) {
      table.innerHTML += `
      <li><a href="shop-grid.html?id=${value.id}">${value.tenDM}</a></li>
        `;
    }
})();