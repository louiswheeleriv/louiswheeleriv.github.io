$(window).load(function() {

    if (window.innerWidth >= 768) {
        $('body').stellar();
    }

    $('nav.navbar').css('margin-top', $('img.banner-image').css('height'));

    window.onresize = function(event) {
        $('nav.navbar').css('margin-top', $('img.banner-image').css('height'));
    }
});
