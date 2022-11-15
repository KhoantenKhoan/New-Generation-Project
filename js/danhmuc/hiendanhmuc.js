// import { FireBaseService } from "./firebaseService.js";
// const brand = new FireBaseService();

// async function showBrand() {
  
//     let response=await brand.getAll('danhMuc');
    
//     let data = await response.json();
//     console.log(data);
//     let content = ``;
//     if (data) {
//       for (const [key, value] of Object.entries(data)) {
//         if (value) {
//           content += `
//           <li><a href="categories.html?id=${key}">${value.tenLoai}</a></li>
//           `;
//         }
//       }
//     }
//     document.getElementById('mainmenu').innerHTML = content;
//   }
//   showBrand();