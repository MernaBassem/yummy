/// <reference types="../@types/jquery" />

//------------navbar close-------------------
function close() {
    let widthNavber = $('#nav .navbar_hide_show').outerWidth();
    $('#nav').animate({ left: -widthNavber }, 700)
    $('#nav .open_nav .icon_open_close .open_close').addClass('fa-bars');
    $('#nav .open_nav .icon_open_close .open_close').removeClass('fa-xmark');
    $("#nav .navbar .links a").css('top', '500px');
}
//-------------navbar open--------------------------
function open() {
    $('#nav').animate({ left: 0 }, 700)
    $('#nav .open_nav .icon_open_close .open_close').removeClass('fa-bars');
    $('#nav .open_nav .icon_open_close .open_close').addClass('fa-xmark');

    for (let i = 0; i < 5; i++) {
        $("#nav .navbar .links a").eq(i).animate({
            top: 0
        }, (i + 5) * 100);
    }
}
//-------------call close -----------------------
close();

//---------------toggle nav open and close -------------------
$('#nav .open_nav .icon_open_close .open_close').on('click', function () {

    if ($('#nav').css("left") == '0px') {
        close();
    }
    else {
        open();
    }

})
// -------------------------------------------------
