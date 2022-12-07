let row = `
    <div class="row">
    <div class="col-lg-12">
        <div class="shoping__cart__table">
            <table>
                <thead>
                    <tr>
                        <th class="shoping__product">Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="giohang">
                    

                </tbody>
            </table>
        </div>
    </div>
    </div>
    <div class="row">
    <div class="col-lg-12">
        <div class="shoping__cart__btns">
            <a href="./index.html" class="primary-btn cart-btn">Tiếp tục mua sắm</a>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="shoping__continue">
            <div class="shoping__discount">
                <h5>Mã giảm giá:</h5>
                <select id="km" class="discount" name="km">
                    
                </select>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="shoping__checkout">
            <h5>Tổng giỏ hàng</h5>
            <ul>
                <li>Giá <span id="tongtien"></span></li>
                <li>Giảm giá <span id="giamgia"></span></li>
                <li>Tổng <span id="tientong"></span></li>
            </ul>
            <a href="./checkout.html" class="primary-btn">Thanh toán</a>
        </div>
    </div>
    </div>
`;
let notHave = `
<div class="row">
<div class="col-lg-12">
    <div class="shoping__cart__table">
        <div class="shoping__cart__text">
            <h3>Bạn chưa mua sản phẩm nào !!!</h3>
        </div>
        <div class="shoping__cart__btns">
            <a href="./index.html" class="primary-btn cart-btn">Tiếp tục mua sắp</a>
        </div>
    </div>
</div>
</div>
`
var cart = JSON.parse(localStorage.getItem("cart"));
if(cart != null && cart != [null]){
    document.querySelector("#cart").innerHTML += row;
}else{
    document.querySelector("#cart").innerHTML += notHave;
}
