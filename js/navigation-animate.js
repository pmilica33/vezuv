$(function () {
    $(window).scroll(function () {
        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
            $('#navbar').removeClass('white-nav animatedFadeNav');
            $('#navbar').addClass('bg-transparent');
        } else {
            $('#navbar').addClass('white-nav animatedFadeNav');
            $('#navbar').removeClass('bg-transparent');
        }
    })
});