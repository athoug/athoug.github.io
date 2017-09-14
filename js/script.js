$(document).ready(function () {

    // play name audio
    $('#name-audio').click(function () {
        const audio = document.querySelector('#athoug-sound');
        if(!audio) return; // stops the function from running all together
        audio.currentTime = 0; // in order to rewind it for if we hit the key over and over again
        audio.play();
    });

    // Animations on Scroll
    $(".js-wp-1").waypoint(function (direction) {
        $(".js-wp-1").addClass('animated fadeIn');
    }, {
        offset: "70%"
    });

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

    // For sticky navigation //
    $(".projects").waypoint(function (direction) {
      if(direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    }, {
      offset: '60px'
    });

    // Navigation Scroll
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
          }, 1500, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });



});
