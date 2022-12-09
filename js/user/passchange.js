var table = document.querySelector("#khachHang");
let params = new URLSearchParams(location.search);
let id = params.get('id');

var member = JSON.parse(localStorage.getItem("member"));
(async () => {
    const response = await fetch(
      "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json"
    );
    const data = await response.json();

    Object.keys(data).forEach((key) => {
      const row = data[key];
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
                        <div class="row g-3">
                            <div class="col-12">
                                <label for="password" class="form-label">Mật khẩu củ</label>
                                <input type="password" class="form-control" id="matKhau">
                            </div>
                            <div class="col-md-6">
                                <label for="repassword-1" class="form-label">Mật khẩu mới</label>
                                <input type="password" class="form-control" id="repassword-1">
                            </div>
                            <div class="col-md-6">
                                <label for="repassword-2" class="form-label">Nhập lại mật khẩu</label>
                                <input type="password" class="form-control" id="repassword-2">
                            </div>
                            <div class="col-12">
                            <input type="hidden" class="form-control" id="email">
                            <input type="hidden" class="form-control" id="tenKH">
                            <input type="hidden" class="form-control" id="diaChi">
                            <input type="hidden" class="form-control" id="sdt">
                            <input type="hidden" class="form-control" id="hinhAnh">
                            <input type="hidden" class="form-control" id="anHien">
                            <hr>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-success btn-sm" id="btnluu">Sửa</button>
                                <a href="userdetail.html" class="btn btn-secondary btn-sm">Về trang thông tin</a>
                            </div>
                        </div>
                        </div>
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
    btnluu = document.querySelector("#btnluu");
    mkc = document.getElementById('matKhau')
    mkm = document.getElementById('repassword-1')
    nmkm = document.getElementById('repassword-2')
    url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang/${id}.json`;
      fetch(url)
      .then(res => res.json())
      .then(sp  =>{
        document.getElementById('tenKH').value = sp.tenKH;
        document.getElementById('email').value = sp.email;
        document.getElementById('hinhAnh').value = sp.hinhAnh;
        document.getElementById('diaChi').value = sp.diaChi;
        document.getElementById("sdt").value = sp.sdt;
        document.getElementById("matKhau").value = sp.password;
        document.getElementById('anHien').value = sp.vaiTro;
      })
    btnluu.onclick = function(){
        url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang/${id}.json`;
        if(mkm.value.trim().length < 6 || mkm.value.trim().length > 30 || nmkm.value.trim().length < 6 || nmkm.value.trim().length > 30){
            toastr.wanning("Mật khẩu từ 6 tới 30 kí tự");
        }else if(mkm.value.trim() === nmkm.value.trim()){
            pass = mkm
        sp={
            tenKH:document.querySelector("#tenKH").value.trim(),
            email:document.querySelector("#email").value.trim(),
            password:pass.value.trim(),
            hinhAnh:document.querySelector("#hinhAnh").value.trim(),
            diaChi:document.querySelector("#diaChi").value.trim(),
            sdt:document.querySelector("#sdt").value.trim(),
            vaiTro : document.querySelector("#anHien").value.trim(),
        }
        options = {
          method: "PUT",
          body: JSON.stringify(sp),
          headers: {'Content-Type':'application/json'}
        }
        fetch(url, options).then(res => res.json())
        .then(data =>{
          toastr.success("Sửa thành công!");
          setTimeout(function () {
            document.location="userdetail.html";
          },1000)
        })
        }else{
            toastr.warning("2 mật khẩu không khớp");
        }
    }
})();
