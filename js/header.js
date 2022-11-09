let header = `
<div class="container">

			<div class="logo">
				<h1><a href="index.html"><b>T<br>H<br>E</b>Big Store<span>The Best Supermarket</span></a></h1>
			</div>
			<div class="head-t">
				<ul class="card">
					<li><a href="wishlist.html"><i class="fa fa-heart" aria-hidden="true"></i>Yêu thích</a></li>
					<li><a href="login.html"><i class="fa fa-user" aria-hidden="true"></i>Đăng nhập</a></li>
					<li><a href="register.html"><i class="fa fa-arrow-right" aria-hidden="true"></i>Đăng kí</a></li>
					<li><a href="about.html"><i class="fa fa-file-text-o" aria-hidden="true"></i>Lịch sử đặt hàng</a></li>
					<li><a href="shipping.html"><i class="fa fa-ship" aria-hidden="true"></i>Giao hàng</a></li>
				</ul>
			</div>

			<div class="header-ri">
				<ul class="social-top">
					<li><a href="#" class="icon facebook"><i class="fa fa-facebook"
								aria-hidden="true"></i><span></span></a></li>
					<li><a href="#" class="icon twitter"><i class="fa fa-twitter"
								aria-hidden="true"></i><span></span></a></li>
					<li><a href="#" class="icon pinterest"><i class="fa fa-pinterest-p"
								aria-hidden="true"></i><span></span></a></li>
					<li><a href="#" class="icon dribbble"><i class="fa fa-dribbble"
								aria-hidden="true"></i><span></span></a></li>
				</ul>
			</div>


			<div class="nav-top" id="nav">
				<nav class="navbar navbar-default">

					<div class="navbar-header nav_2">
						<button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse"
							data-target="#bs-megadropdown-tabs">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>


					</div>
					<div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
						<ul class="nav navbar-nav ">
							<li class=" active"><a href="index.html" class="hyper "><span>Trang chủ</span></a></li>

							<li class="dropdown ">
								<a href="#" class="dropdown-toggle  hyper" data-toggle="dropdown"><span>Danh mục<b
											class="caret"></b></span></a>
								<ul class="dropdown-menu multi">
									<div class="row">
										<div class="col-sm-3">
											<ul class="multi-column-dropdown">

												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Water & Beverages</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Fruits & Vegetables</a></li>
												<li><a href="kitchen.html"> <i class="fa fa-angle-right"
															aria-hidden="true"></i>Staples</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Branded Food</a></li>

											</ul>

										</div>
										<!-- <div class="col-sm-3">

											<ul class="multi-column-dropdown">
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Breakfast &amp; Cereal</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Snacks</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Spices</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Biscuit &amp; Cookie</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Sweets</a></li>

											</ul>

										</div>
										<div class="col-sm-3">

											<ul class="multi-column-dropdown">
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Pickle & Condiment</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Instant Food</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Dry Fruit</a></li>
												<li><a href="kitchen.html"><i class="fa fa-angle-right"
															aria-hidden="true"></i>Tea &amp; Coffee</a></li>

											</ul>
										</div> -->
										<div class="col-sm-3 w3l">
											<a href="kitchen.html"><img src="images/me.png" class="img-responsive"
													alt=""></a>
										</div>
										<div class="clearfix"></div>
									</div>
								</ul>
							</li>

							<li><a href="codes.html" class="hyper"> <span>Tin tức</span></a></li>
							<li><a href="codes.html" class="hyper"> <span>Về chúng tôi</span></a></li>
							<li><a href="codes.html" class="hyper"> <span>Codes</span></a></li>
							<li><a href="contact.html" class="hyper"><span>Liên hệ</span></a></li>
						</ul>
					</div>
				</nav>
				<div class="cart" id="box-cart">

					<span class="fa fa-shopping-cart my-cart-icon"><span
							class="badge badge-notify my-cart-badge"></span></span>
				</div>
				<div class="clearfix" id="clearfix"></div>
			</div>

		</div>
`

document.querySelector("#header").innerHTML += header;