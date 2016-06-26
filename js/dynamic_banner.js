$(window).load(function() {

    if (window.innerWidth >= 768) {
        document.getElementById('banner-text').dataset.stellarRatio = 0.5;
        $('body').stellar();
    }

    $('nav.navbar').css('margin-top', $('img.banner-image').css('height'));

    window.onresize = function(event) {
        $('nav.navbar').css('margin-top', $('img.banner-image').css('height'));
    }
});
