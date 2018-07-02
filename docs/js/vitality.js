/*!
 * Vitality v2.2.0 (http://themes.startbootstrap.com/vitality-v2.2.0)
 * Copyright 2013-2018 Start Bootstrap
 * Purchase a license to use this theme at (https://wrapbootstrap.com)
 */
// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
  if (isPhoneDevice) {
    //mobile
  } else {
    //desktop
    // Initialize WOW.js
    wow = new WOW({
      offset: 50
    })
    wow.init();
  }
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 69)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Activates floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Magnific Popup Settings
  $('.mix').magnificPopup({
    type: 'image',
    image: {
      titleSrc: 'title'
    }
  });

  $('#media-more').click(function(e) {
    $('.hidden-media').removeClass('hidden-media');
    $(this).hide();
  });

  $('#talk-more').click(function(e) {
    $('.hidden-talk').removeClass('hidden-talk');
    $(this).hide();
  });

  $('#event-more').click(function(e) {
    $('.hidden-event').removeClass('hidden-event');
    $(this).hide();
  });

})(jQuery); // End of use strict
