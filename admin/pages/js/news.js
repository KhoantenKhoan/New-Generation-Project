url = "http://localhost:3000/tintuc";
fetch(url)
  .then((res) => res.json())
  .then((listTT) => {
    listTT.forEach((tt) => {
      document.querySelector("#tt").innerHTML += `
        <tr>
            <td>${tt.id}</td>
            <td>${tt.TieuDe}</td>
            <td>${tt.id}</td>
            <td>${tt.TomTat}</td>
            <td>${tt.NgayDang}</td>
            <td>${tt.LuotXem}</td>
            <td> <label class="badge badge-warning">Hiện</label> </td>
            <td>
                <a href="suatintuc.html?id=${tt.id}"><button class="badge badge-primary sua button">Sửa</button></a>
                <button class="badge badge-danger xoa button" onclick="xoasp('${tt.id}')">Xóa</button>
            </td>
        </tr>
		`;
    });
  });
  btnluu = document.querySelector("#btnluu");
  btnluu.onclick = function(){
    url="http://localhost:3000/tintuc";
    
    danhmuc={
      TieuDe: document.querySelector("#tieude").value.trim(),
      TacGia: document.querySelector("#tacgia").value.trim(),
      HinhAnh: document.querySelector("#hinh").value.trim(),
      NgayDang: document.querySelector("#ngaynhap").value.trim(),
      NoiDung: document.querySelector("#mota").value.trim(),
      TomTat: document.querySelector("#tomtat").value.trim(),
      LuotXem:0
    }
    options = {
      method: "POST",
      body: JSON.stringify(danhmuc),
      headers: {'Content-Type':'application/json'}
    }
    fetch(url, options).then(res => res.json())
    .then(data =>{
      document.location="blog.html";
    })
  }
  function xoasp(id){
    const hoi = confirm("Bạn có muốn xóa không?")
    if (hoi==false) return;
    url=`http://localhost:3000/tintuc/${id}`;
    fetch(url,{method:"delete"})
    .then(res => res.json())
    .then(data => {
      alert("Đã xoá!");
      document.location="brand.html";
    })
  }
