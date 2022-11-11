let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`http://localhost:3000/danhmuc/${id}`;
  
  sp={
    TenDM: document.querySelector("#ten").value.trim(),
    
  }
  options = {
    method: "PUT",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="brand.html";
  })
}

// url="http://localhost:3000/DanhMuc";
// fetch(url)
// .then(res => res.json())
// .then(listLoai =>{
//   listLoai.forEach(loai =>{
//     document.getElementById("idloai").innerHTML +=`
//       <option value="${loai.id}">${loai.id}-${loai.TenDM}</option>
//     `;
//   })
// })
url = `http://localhost:3000/danhmuc/${id}`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById('ten').value = sp.TenDM;
   
    
})