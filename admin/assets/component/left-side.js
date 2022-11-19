let leftSibar = `
<button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                    <i class="ion-close"></i>
                </button>

            <div class="left-side-logo d-block d-lg-none">
                <div class="text-center">

                    <a href="index.html" class="logo"><img src="assets/images/logo-dark.png" height="20" alt="logo"></a>
                </div>
            </div>

            <div class="sidebar-inner slimscrollleft">

                <div id="sidebar-menu">
                    <ul>
                        <li class="menu-title">Menu</li>
                        <li>
                            <a href="member.html" class="waves-effect">
                                <i class="dripicons-meter"></i>
                                <span> Thành viên <span class="badge badge-success badge-pill float-right"></span></span>
                            </a>
                        </li>

                        <li>
                            <a href="product.html" class="waves-effect">
                                <i class="dripicons-meter"></i>
                                <span> Sản phẩm <span class="badge badge-success badge-pill float-right"></span></span>
                            </a>
                        </li>

                        <li>
                            <a href="dmTong.html" class="waves-effect">
                                <i class="dripicons-meter"></i>
                                <span> Danh mục tổng <span class="badge badge-success badge-pill float-right"></span></span>
                            </a>
                        </li>

                        <li>
                            <a href="category.html" class="waves-effect">
                                <i class="dripicons-meter"></i>
                                <span> Danh mục <span class="badge badge-success badge-pill float-right"></span></span>
                            </a>
                        </li>

                        <li>
                            <a href="oder.html" class="waves-effect">
                                <i class="dripicons-meter"></i>
                                <span> Đơn hàng <span class="badge badge-success badge-pill float-right"></span></span>
                            </a>
                        </li>

                        <li>
                            <a href="thongBao.html" class="waves-effect">
                                <i class="dripicons-meter"></i>
                                <span> Thông báo <span class="badge badge-success badge-pill float-right"></span></span>
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
`

document.querySelector("#leftSibar").innerHTML += leftSibar