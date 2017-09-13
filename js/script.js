$(document).ready(function () {
    // Mobile navigation
    $(".js-mobile-nav").click(function () {
        var nav = $(".js-main-nav");
        var icon = $(".js-mobile-nav i");

        // slide toggle the navigation
        nav.slideToggle(300);

        // show the right icon based on status (closed or burger menu)
        if(icon.hasClass("ion-navicon")) {
            icon.addClass("ion-android-close");
            icon.removeClass("ion-navicon");
        } else {
            icon.addClass("ion-navicon");
            icon.removeClass("ion-android-close");
        }
    });
});
