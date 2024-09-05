$('document').ready(function () {
    // Your jQuery code here
    $('.darkMode').click(function () {
        $('.lightMode').removeClass('active');
        $(this).addClass('active');
        $('body').removeClass('light');
        $('body').addClass('dark');
    });
    $('.lightMode').click(function () {
        $('.darkMode').removeClass('active');
        $(this).addClass('active');
        $('body').removeClass('dark');
        $('body').addClass('light');
    });

    /* Header Sticky */
    $(window).scroll(function () {
        var sticky = $('.mainHeader'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});