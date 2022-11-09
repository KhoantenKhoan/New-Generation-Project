$(document).ready(function (c) {
    $('.close1').on('click', function (c) {
        $('.cross').fadeOut('slow', function (c) {
            $('.cross').remove();
        });
    });
});

$(document).ready(function (c) {
    $('.close2').on('click', function (c) {
        $('.cross1').fadeOut('slow', function (c) {
            $('.cross1').remove();
        });
    });
});

$(document).ready(function (c) {
    $('.close3').on('click', function (c) {
        $('.cross2').fadeOut('slow', function (c) {
            $('.cross2').remove();
        });
    });
});

$('.value-plus').on('click', function () {
    var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10) + 1;
    divUpd.text(newVal);
});

$('.value-minus').on('click', function () {
    var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10) - 1;
    if (newVal >= 1) divUpd.text(newVal);
});
