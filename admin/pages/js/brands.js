var url = "http://localhost:3000/danhmuc";
fetch(url)
  .then((data) => data.json())
  .then((loai) => {
    loai.forEach((cat) => {
		document.querySelector("#brand").innerHTML += ` 
		<tr>
			<td>${cat.id}</td>
			<td>${cat.TenDM}</td>
			<td>
				<a href="suadanhmuc.html?id=${cat.id}"><button  class="badge badge-primary sua button">Sửa</button></a>
				<button class="badge badge-danger xoa button" onclick="xoasp('${cat.id}')">Xóa</button>
			</td>
		</tr>
		`;
    });
  });
  btnluu = document.querySelector("#btnluu");
  
  btnluu.onclick = function(){
    url="http://localhost:3000/danhmuc";
    
    danhmuc={
      TenDM: document.querySelector("#ten").value.trim(),
    
    }
    options = {
      method: "POST",
      body: JSON.stringify(danhmuc),
      headers: {'Content-Type':'application/json'}
    }
    fetch(url, options).then(res => res.json())
    .then(data =>{
      document.location="brand.html";
    })
  }
  function xoasp(id){
    const hoi = confirm("Bạn có muốn xóa không?")
    if (hoi==false) return;
    url=`http://localhost:3000/danhmuc/${id}`;
    fetch(url,{method:"delete"})
    .then(res => res.json())
    .then(data => {
      document.location="brand.html";
    })
  }
