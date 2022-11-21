let topBar = `
<div class="topbar-left	d-none d-lg-block">
                        <div class="text-center">

                            <a href="index.html" class="logo"><img src="../img/logo.png" height="50px" alt="logo"></a>
                        </div>
                    </div>

                    <nav class="navbar-custom">

                        

                        <ul class="list-inline menu-left mb-0">
                            <li class="list-inline-item">
                                <button type="button" class="button-menu-mobile open-left waves-effect">
                                        <i class="ion-navicon"></i>
                                    </button>
                            </li>
                        </ul>

                        <div class="clearfix"></div>

                    </nav>
`

document.querySelector("#topBar").innerHTML += topBar