// js =========================================================
$('html').removeClass('no-js');
$('html').addClass('js');

// loaded 
window.onload = function(){
  $("body").addClass("loaded");
}, 250;

// preload ====================================================
// window.onload = function(){
//  setTimeout(function(){
//    $("#overlayer").fadeOut("slow");
//    $("body").addClass("loaded");
//  }, 250);
// };

// cursor =====================================================
jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 0);

});

// lazy load ==================================================
jQuery(document).ready(function() {
  var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
  });
});

// menu toggle ================================================
$('.nav-button').on('click', function() {
  $('.primary').toggleClass('active');
  $('nav').toggleClass('active');
});

$('.nav-close').on('click', function() {
  $('.primary').removeClass('active');
  $('nav').removeClass('active');
});

// work nav ===================================================
$('.work-menu').on('click', function() {
  $('.primary').toggleClass('active');
  $('.work-nav').toggleClass('active');
});

$('.work-close').on('click', function() {
  $('.primary').removeClass('active');
  $('.work-nav').removeClass('active');
  $('nav').removeClass('active');
});

// more button
$('.work-more').on('click', function() {
  $('.primary').removeClass('active');
  $('.work-nav').toggleClass('active');
  $('nav').toggleClass('active');
});

// contact nav ================================================
$('.contact-menu').on('click', function() {
  $('.primary').toggleClass('active');
  $('.contact-form').toggleClass('active');
});

$('.contact-close').on('click', function() {
  $('.primary').removeClass('active');
  $('.contact-form').removeClass('active');
  $('nav').removeClass('active');
});

// more button
$('.contact-more').on('click', function() {
  $('.primary').removeClass('active');
  $('.contact-form').toggleClass('active');
  $('nav').toggleClass('active');
});

// full page ==================================================
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
    licenseKey: '259FCA9F-E0AA43B7-BBB04D2A-F83BE95D',
    easing: 'easeInOutCubic',
    scrollingSpeed: '900',
    dragAndMove: true,
    responsiveWidth: 1225,
    onLeave: function(index, nextIndex, direction){
      $('.section.active').next('.section').addClass('animate-pane');
    }
	});
});

$('.previous').click(function(){
    $.fn.fullpage.moveSectionUp();
});

$('.next').click(function(){
    $.fn.fullpage.moveSectionDown();
});

// work list hover ============================================
$(document).ready(function() {
  $('.work-list .one').hover(
         function(){ $('.work-nav__images .one').addClass('hover') },
         function(){ $('.work-nav__images .one').removeClass('hover') }
  );
  $('.work-list .two').hover(
         function(){ $('.work-nav__images .two').addClass('hover') },
         function(){ $('.work-nav__images .two').removeClass('hover') }
  );
  $('.work-list .three').hover(
         function(){ $('.work-nav__images .three').addClass('hover') },
         function(){ $('.work-nav__images .three').removeClass('hover') }
  );
  $('.work-list .four').hover(
         function(){ $('.work-nav__images .four').addClass('hover') },
         function(){ $('.work-nav__images .four').removeClass('hover') }
  );
  $('.work-list .five').hover(
         function(){ $('.work-nav__images .five').addClass('hover') },
         function(){ $('.work-nav__images .five').removeClass('hover') }
  );
  $('.work-list .six').hover(
         function(){ $('.work-nav__images .six').addClass('hover') },
         function(){ $('.work-nav__images .six').removeClass('hover') }
  );
  $('.work-list .seven').hover(
         function(){ $('.work-nav__images .seven').addClass('hover') },
         function(){ $('.work-nav__images .seven').removeClass('hover') }
  );
  $('.work-list .eight').hover(
         function(){ $('.work-nav__images .eight').addClass('hover') },
         function(){ $('.work-nav__images .eight').removeClass('hover') }
  );
  $('.work-list .nine').hover(
         function(){ $('.work-nav__images .nine').addClass('hover') },
         function(){ $('.work-nav__images .nine').removeClass('hover') }
  );
  $('.work-list .ten').hover(
         function(){ $('.work-nav__images .ten').addClass('hover') },
         function(){ $('.work-nav__images .ten').removeClass('hover') }
  );
});

// owl ========================================================
$(function(){
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      smartSpeed: 1000,
      navText: ["<span class='arrow-left'></span>","<span class='arrow-right'></span>"],
      responsive:{
          0:{
              items:1
          }
      }
  })
}); 

// animsition =================================================
$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-bottom',
    outClass: 'overlay-slide-out-top',
    inDuration: 1500,
    outDuration: 800,
    linkElement: 'a:not([target="_blank"]):not([href^=#]):not([footer-links])',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '<span class="loader"></span>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});


// animate on scroll ==========================================
(function ($) {
  'use strict';
  $.fn.inviewport = function (options) {
    var settings = $.extend({
      'minPercentageInView' : 100,
      'standardClassName': 'in-view'
    }, options);
    this.each(function () {
      var $this = $(this),
        $win = $(window),
        changed = false,
        isVisible = function () {
          var c = settings.className || settings.standardClassName,
            min = (settings.threshold || settings.minPercentageInView) / 100,
            xMin = $this.width() * min,
            yMin = $this.height() * min,
            winPosX = $win.scrollLeft() + $win.width(),
            winPosY = $win.scrollTop() + $win.height(),
            elPosX = $this.offset().left + xMin,
            elPosY = $this.offset().top + yMin;
          if (winPosX > elPosX && winPosY > elPosY) {
            $this.addClass(c);
          }
        };
      $win.on('ready', isVisible())
        .on('resize scroll', function () {
          changed = true;
        })
      setInterval(function () {
        if (changed) {
          changed = false;
          isVisible();
        }
      }, 250);
    });
  };
}(jQuery));

$(function () {
  $('.animate').inviewport({
    threshold: 0.1,
    className: 'on-screen'
  })
});

// smooth scroll anchor =======================================
$('a[href*="#"]:not([href="#"])').click(function() {
    var offset = -175;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top + offset
            }, 1000);
            return false;
        }
    }
});


