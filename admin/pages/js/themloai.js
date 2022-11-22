btnluu = document.querySelector("#btnluu");
  
btnluu.onclick = function(){
  url="https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong.json";
  
  danhMuc={
    tenDMT: document.querySelector("#ten").value.trim(),
    
  }
  options = {
    method: "POST",
    body: JSON.stringify(danhMuc),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="dmTong.html";
  })
}