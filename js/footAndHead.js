let footer = `
<div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 border-cover">
                    <div class="footer__about">
                        <h5>Thông tin</h5>
                        <ul>
                            <li>Địa chỉ: Lô 24 CVPM Quang Trung, P.Tân Chánh Hiệp, Q.12, TP.HCM</li>
                            <li>SĐT: +08 390 8585</li>
                            <li>Email: admination@silkroad.su</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 offset-lg-1 border-cover">
                    <div class="footer__widget">
                        <h5>Hữu ích</h5>
                        <ul>
                            <li><a href="#">Chúng tôi là ai</a></li>
                            <li><a href="shop-grid.html?idDMT=2">Sản phẩm của chúng tôi</a></li>
                            <li><a href="shoping-cart.html">Giỏ hàng của bạn</a></li>
                            <li><a href="resigter.html">Đăng ký tài khoản</a></li>
                            <li><a href="contact.html">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 offset-lg-1 border-cover">
                    <div class="footer__widget">
                        <div class="footer__about__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""></a>
                        </div>
                        <div class="footer__widget__social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

let humberger = `
<div class="humberger__menu__logo">
            <a href="#"><img src="img/logo.png" alt=""></a>
        </div>
        <div class="humberger__menu__cart">
            <ul>
                <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div class="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div class="humberger__menu__widget">
            <div class="header__top__right__language">
                <img src="img/language.png" alt="">
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Vietnames</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div class="header__top__right__auth">
                <a href="./login.html"><i class="fa fa-user"></i> Đăng nhập</a>
            </div>
        </div>
        <nav class="humberger__menu__nav mobile-menu">
            <ul>
                <li class="active"><a href="./index.html">Trang chủ</a></li>
                <li><a href="./shop-grid.html">Sản phẩm</a></li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="humberger__menu__contact">
            <ul>
                <li><i class="fa fa-envelope"></i>admination@silkroad.su</li>
            </ul>
        </div>
`;

let header = `
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 text-white">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i>admination@silkroad.su</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6" id="member">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="container header__down">
            <div class="row">
                <div class="col-lg-3 box_logo">
                    <div class="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><a class="nav__link" href="./index.html">Trang chủ</a></li>
                            <li><a class="nav__link" href="./shop-grid.html?idDMT=1">Sản phẩm</a></li>
                            <li><a class="nav__link" href="./shop-grid.html?idDMT=1">Về Chúng tôi</a></li>
                            <li><a class="nav__link" href="./contact.html">Liên hệ</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="hero__search__phone col-lg-1 box_icon">
                                <div class="hero__search__phone__text">
                                    <a href="./shoping-cart.html"><i class="fa fa-shopping-bag"></i></a> 
                                </div>
                            </div>
            </div>
            <div class="humberger__open" id="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
`;

document.querySelector("#footer").innerHTML += footer;
document.querySelector("#humberger").innerHTML += humberger;
document.querySelector("#header").innerHTML += header;

var member = JSON.parse(localStorage.getItem("member"));
const showLogin = () =>{
    let mem = document.getElementById("member")
    if(member){
        mem.innerHTML=`
            <div class="header__top__right">
                <div class="header__top__right__auth">
                    <a href="./userdetail.html"><i class="fa fa-user"></i> Tài khoản / </a>
                </div>
                <div class="header__top__right__auth">
                    <a href="" onclick ="signOut()" ><i class="fa fa-sign-out"></i>Đăng xuất</a>
                </div>
            </div>
        `
    }else{
        mem.innerHTML=`
        <div class="header__top__right">
            <div class="header__top__right__auth">
                <a href="./login.html"><i class="fa fa-sign-in"></i> Đăng nhập / </a>
            </div>
            <div class="header__top__right__auth">
                <a href="./resigter.html"><i class="fa fa-user"></i> Đăng ký</a>
            </div>
        </div>
        `
    }
};
const signOut = () => {
        // localStorage.removeItem('member');
        window.location.href = 'index.html';
        // document.location="index.html";
}
showLogin();
