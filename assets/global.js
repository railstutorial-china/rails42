$(document).ready(function() {
    $('a[href*=#]:not([href=#])').click(function(e) {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname)
        {

            var target = $(this.hash),
            headerHeight = $(".navbar").height() + 10; // Get fixed header height

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - headerHeight
                }, 500);
            }
        }
    });
});
