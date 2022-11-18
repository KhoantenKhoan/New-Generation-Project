let nav = `
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Trang chủ</span>
            </a>
          </li>
          <li class="nav-item nav-category">Đơn hàng</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false"
              aria-controls="ui-basic">
              <i class="menu-icon mdi mdi-cart"></i>
              <span class="menu-title">Đơn hàng</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="./pages/order/order.html">Đơn hàng</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item nav-category">Forms and Datas</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false"
              aria-controls="form-elements">
              <i class="menu-icon mdi mdi-card-text-outline"></i>
              <span class="menu-title">Danh mục</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="./pages/brand/brand.html">Danh mục</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/danhmuctong/dmtong.html">Danh mục tổng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/brand/addbrand.html">Thêm danh mục</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/danhmuctong/themdmtong.html">Thêm danh mục tổng</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="menu-icon mdi mdi-food-fork-drink"></i>
              <span class="menu-title">Sản phẩm</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="./pages/product/product.html">Sản phẩm</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/product/addproduct.html">Thêm sản phẩm</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#comment" aria-expanded="false" aria-controls="comment">
              <i class="menu-icon mdi mdi-comment-processing-outline"></i>
              <span class="menu-title">Comment</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="comment">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="./pages/comment/comment.html">Danh sách</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i class="menu-icon mdi mdi-layers-outline"></i>
              <span class="menu-title">Bài viết</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="icons">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="./pages/blog/blog.html">Bài viết</a></li>
                <li class="nav-item"> <a class="nav-link" href="./pages/blog/addblog.html">Thêm bài viết</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="menu-icon mdi mdi-account-circle-outline"></i>
              <span class="menu-title">User</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="./pages/user/user.html">Danh sách</a></li>
                <li class="nav-item"> <a class="nav-link" href="./pages/user/themuser.html">Thêm User</a></li>

              </ul>
            </div>
          </li>

        </ul>
`

document.querySelector("#sidebar").innerHTML += nav;