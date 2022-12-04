var url = "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/binhLuan.json";
fetch(url)
  .then((data) => data.json())
  .then((loai) => {
    loai.forEach((cat) => {
		document.querySelector("#tt").innerHTML += ` 
		<tr>
        <td>${cat.id}</td>
        <td>${cat.idKH}</td>
        <td>${cat.idSP}</td>
        <td>${cat.ngay}</td>
        <td>${cat.noiDung}</td>
        
        <td>
            
            <button class="btn btn-danger btn-del" onclick="xoasp('${cat.id}')">Xóa</button>
        </td>
    </tr>
		`;
    });
  });
  function xoasp(id){
    console.log(id);
    const hoi = confirm("Bạn có muốn xóa không?")
    if (hoi==false) return;
    url=`http://localhost:3000/binhluan/${id}`;
    fetch(url,{method:"delete"})
    .then(res => res.json())
    .then(data => {
      alert("Đã xoá!");
      document.location="comment.html";
    })
  }