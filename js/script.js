window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')


jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});

jQuery(function () {
    jQuery('.starbox').each(function () {
        var starbox = jQuery(this);
        starbox.starbox({
            average: starbox.attr('data-start-value'),
            changeable: starbox.hasClass('unchangeable') ? false : starbox.hasClass('clickonce') ? 'once' : true,
            ghosting: starbox.hasClass('ghosting'),
            autoUpdateAverage: starbox.hasClass('autoupdate'),
            buttons: starbox.hasClass('smooth') ? false : starbox.attr('data-button-count') || 5,
            stars: starbox.attr('data-star-count') || 5
        }).bind('starbox-value-changed', function (event, value) {
            if (starbox.hasClass('random')) {
                var val = Math.random();
                starbox.next().text(' ' + val);
                return val;
            }
        })
    });
});

addEventListener("load", function() { 
    setTimeout(hideURLbar, 0); }, 
false);
    function hideURLbar(){ 
        window.scrollTo(0,1); 
    } 

    $(function () {

        var goToCartIcon = function ($addTocartBtn) {
            var $cartIcon = $(".my-cart-icon");
            var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({ "position": "fixed", "z-index": "999" });
            $addTocartBtn.prepend($image);
            var position = $cartIcon.position();
            $image.animate({
                top: position.top,
                left: position.left
            }, 500, "linear", function () {
                $image.remove();
            });
        }

        $('.my-cart-btn').myCart({
            classCartIcon: 'my-cart-icon',
            classCartBadge: 'my-cart-badge',
            affixCartIcon: true,
            checkoutCart: function (products) {
                $.each(products, function () {
                    console.log(this);
                });
            },
            clickOnAddToCart: function ($addTocart) {
                goToCartIcon($addTocart);
            },
            getDiscountPrice: function (products) {
                var total = 0;
                $.each(products, function () {
                    total += this.quantity * this.price;
                });
                return total * 1;
            }
        });

    });

    $(document).ready(function () {
        /*
            var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear' 
            };
        */
        $().UItoTop({ easingType: 'easeOutQuart' });
    });