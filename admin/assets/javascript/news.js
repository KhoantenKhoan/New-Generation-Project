

  let count =1;
  var table = document.querySelector("#tt");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/thongBao.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          if(row){
          table.innerHTML += `
          <tr>
            <td>${count++}</td>
            <td>${row.idKM}</td>
            <td>${row.ngayDang}</td>
            <td> 
                <img src="${row.hinhAnh}" alt="" width="150px" height="150px">
            </td>
            <td> <label class="btn btn-primary">Hiện</label> </td>
            <td>
                <a href="suatb.html?id=${key}"><button class="btn btn-info">Sửa</button></a>
                <button class="btn btn-danger btn-del" onclick="xoasp('${key}')">Xóa</button>
            </td>
        </tr>
            `;}
        });
      })();
  function xoasp(id){
    const hoi = confirm("Bạn có muốn xóa không?")
    if (hoi==false) return;
    url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/thongBao/${id}.json`;
    fetch(url,{method:"delete"})
    .then(res => res.json())
    .then(data => {
      toastr.success("Xóa thành công!");
      setTimeout(function () {
      
        document.location="thongBao.html";
      },1000)
    })
  }
