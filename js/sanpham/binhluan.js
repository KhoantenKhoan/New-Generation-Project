let member1 = JSON.parse(localStorage.getItem("member"));
let params = new URLSearchParams(location.search);
let id_item = params.get("id");
async function showUser (){
    let card = document.getElementById("card");
    const response = await fetch(
        "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/khachHang.json"
      );
      const data = await response.json();
      Object.keys(data).forEach((key) => {
        const value2 = data[key];
        if(value2.email == member1){
    if(member1 && value2){
        card.innerHTML +=`
            <div class="card-body p-4">
                <div class="d-flex flex-start w-100">
                    <img class="rounded-circle shadow-1-strong me-3"
                        src="${value2.hinhAnh}" alt="avatar"
                        width="65" height="65" />
                    <div class="w-100 form__comment">
                        <h5>Để lại đánh giá</h5>
                        <div class="form-outline">
                            <textarea class="form-control" required id="textAreaExample" rows="4"></textarea>
                        </div>
                        <div id="binhluan" class="d-flex justify-content-between mt-3">
                            <button type="button" id="btn-luu" class="btn btn-primary">
                                Send <i class="fas fa-long-arrow-alt-right ms-1"></i>
                                </button>
                                </div>
                    </div>
                </div>
            </div>
            `
    }else{
        card.innerHTML =``;
    }
    document.getElementById("btn-luu").onclick = function binhLuan() {
        
        let bl={
            "idKH" : key,
            "idSP" : id_item,
            "noiDung" : document.getElementById("textAreaExample").value.trim(),
            "ngay" : new Date().toISOString().slice(0,10)
        }
        let options = {
            method: "POST",
            body: JSON.stringify(bl),
            headers: {'Content-Type':'application/json'}
          }
          fetch(`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/binhLuan.json`, options).then(res => res.json())
          .then(data =>{
            toastr.success("Bình luận thành công");
            window.location.reload();
          })
    }
}
    
    
})
}
showUser ();