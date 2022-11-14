var url = "http://localhost:3000/binhluan";
fetch(url)
  .then((data) => data.json())
  .then((loai) => {
    loai.forEach((cat) => {
		document.querySelector("#tt").innerHTML += ` 
		<tr>
                                        <td>${cat.id}</td>
                                        <td>${cat.idKH}</td>
                                        <td>${cat.idSP==0?"":"Có"}</td>
                                        <td>${cat.idTT==0?"":"Có"}</td>
                                        <td>${cat.NoiDung}</td>
                                        <td>${cat.ThoiGian}</td>
                                        
                                        <td>
                                           
                                            <button class="badge badge-danger xoa button" onclick="xoasp('${cat.id}')">Xóa</button>
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