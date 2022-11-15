import { FireBaseService } from "../API/firebaseService.js";
const brand = new FireBaseService();

async function showBrand() {
  
    let response=await brand.getAll('khuyenMai');
    
    let data = await response.json();
    
    let content = ``;
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (value) {
          console.log(value)
          content += `
            <option value="${value.id}">${value.khuyenMai}</option>
          `;
        }
      }
    }
    document.getElementById('km').innerHTML = content;
  }
  showBrand();