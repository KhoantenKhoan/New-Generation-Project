var table = document.querySelector("#khachHang");

var member = JSON.parse(localStorage.getItem("member"));
(async () => {
    const response = await fetch(
      "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json"
    );
    const data = await response.json();
    const response1 = await fetch(
        "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/donHang.json"
      );
      const data1 = await response1.json();
      const response2 = await fetch(
        "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/chiTietDonHang.json"
    );
    const data2 = await response2.json();
      
      

    Object.keys(data).forEach((key) => {
      const row = data[key];
      console.log(member != null);
      if(row && row.email == member){
            if(member != null){
                table.innerHTML += `
                <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                    <div class="card-body text-center">
                        <img src="${row.hinhAnh}" alt="avatar"
                        class="rounded-circle img-fluid" style="width: 150px;">
                        <h5 class="my-3">${row.tenKH}</h5>
                        <div id="admin">
                            ${row.vaiTro == 1?`<p class="text-muted mb-0 text-align-center btn btn-primary " ><a href="admin/index.html" style="color:white;">Admin</a></p>`:""}
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Họ và Tên</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">${row.tenKH}</p>
                        </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">${row.email}</p>
                        </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Số điện thoại</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">${row.sdt}</p>
                        </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Địa chỉ</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">${row.diaChi}</p>
                        </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Họ và Tên</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0"><a class="btn btn-primary btn-sm" href="./userchange.html">Chỉnh sửa thông tin</a><a class="btn btn-secondary btn-sm" href="./passchange.html">Đổi mật khẩu</a></p>
                        </div>
                        </div>
                        <hr>
                    </div>
                    </div>
                    <div class="row order_detail">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>ID đơn hàng</th>
                            <th>Ghi chú</th>
                            <th>Ngày đặt hàng</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody id="dh">
                        
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                `;
            }else{
                table.innerHTML = `
                    <div style="text-align: center;">
        
                        <h3>Bạn cần phải đăng nhập!</h3>
                        <a class="btn btn-primary" href="index.html">Về trang chủ</a>
                    </div>    
                `
            }
        }
      
        
    });
    Object.keys(data).forEach((key) =>{
        const row = data[key];
        let count = 1;
        Object.keys(data1).forEach((key1) =>{
            let donhang =document.getElementById("dh");
            const row1 = data1[key1];
            if(row.email == member && row1.idKH == key) {
                donhang.innerHTML +=`
                <tr >
                    <td>${count++}</td>
                    <td>${key1}</td>
                    <td>${row1.ghiChuKH}</td>
                    <td>${row1.ngayDH}</td>
                    <td>${row1.trangThaiDH}</td>
                    <td>
                    <button type="button" class="btn btn-primary primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"> Chi tiết </button>
                    </td>
                    <td>
                    <button type="button" class="btn btn-danger danger"> Hủy đơn </button>
                    </td>
                </tr>
                `;
            }else{
                
            }
    });
    });
    Object.keys(data).forEach((key) =>{
        const row = data[key];
    Object.keys(data1).forEach((key1) =>{
        const row1 = data1[key1];
        let count1 =1;
        Object.keys(data2).forEach((key2) =>{
            const row2 = data2[key2];
            if(row.email == member &&  row2.idDH == key1 || row.email == member && row2.idDH == row1.id)
            document.getElementById("ct").innerHTML += `
            <tr>
                <td>${count1++}</td>
                <td>${row2.tenSP.toUpperCase()}</td>
                <td><img style="width: 100px;" src="${row2.hinhAnh}" alt="${row2.tenSP}"></td>
                <td>${row2.soLuong}</td>
                <td>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(row2.donGia)}</td>
            </tr>
            `;
        });
    });
});
    })();
//   <div class="row change_password" id="change">
//                 <form class="forms-sample">
//                     <div class="form-group">
//                         <label for="exampleInputUsername1">Mật khẩu cũ</label>
//                         <input type="password" class="form-control" placeholder="Mật khẩu cũ">
//                     </div>
//                     <div class="form-group">
//                     <label for="exampleInputUsername1">Mật khẩu mới</label>
//                     <input type="password" class="form-control" placeholder="Mật khẩu mới">
//                 </div>
//                     <button type="submit" class="btn btn-primary sua me-2">Thay đổi</button>
//                     <button class="btn btn-danger xoa ">Hủy</button>
//                 </form>
//                 </div>