function giohang(id, ten, gia, hinh){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart==null) {
        cart=[];
        cart.push({id:id,tenSP:ten,gia:gia,hinhAnh:hinh,soluong:1});
    }else{
        var item = cart.find(item => item.id === id );
        if(item) item.soluong++ ;
        else cart.push({id:id,tenSP:ten,gia:gia,hinhAnh:hinh,soluong:1});
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    let soluong = 0;
        if(cart!=null){
            cart.forEach(item => {
                soluong += Number(item.soluong);
            })
            localStorage.setItem("soluong", soluong);
        }else{
            localStorage.setItem("soluong", soluong);
        }
}