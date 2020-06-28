///======== pre loader script 

$(document).ready(function() {
 
    setTimeout(function(){
        $(".loader").delay(500).fadeOut("slow");
        $("#overlayer").delay(500).fadeOut("slow");	
    }, 500);
 
});
$(document).ready(function () {
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
  });
})


// // sticky navigation bar 
// var siteSticky = function() {
//   $(".site-navbar-target").sticky({topSpacing:0});
// };
// siteSticky();


$(window).scroll(function() {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 50) {
    $("#stickyNav").addClass("js-sticky-header").animate({backgroundColor: "white"},500);
  } else {
    $("#stickyNav").removeClass("js-sticky-header").animate({backgroundColor: "transparent"},2000);
  }
});



// vue instance for navigation bar
/*
var nav = new Vue({
  el: ".nav-wrapper",
  data: {
    scrolled: false,
    mobileNavigation : false,
  },
  methods: {
    
    stickyNav(event) {
      let nav = document.querySelector("#stickyNav");
      if (window.scrollY > 100 && !nav.classList.contains("js-sticky-header")) {
        nav.classList.add("js-sticky-header");
      } else if(window.scrollY < 100) {
        nav.classList.remove("js-sticky-header");
      }
    }

  },
  created() {
    window.addEventListener("scroll", this.stickyNav())
  },
  destroyed() {
    window.addEventListener("scroll", this.stickyNav())
  } */




// ======= activating the first carousel slider
$('#textSlider').owlCarousel({
  center: false,
  items: 1,
  loop: true,
  stagePadding: 0,
  margin: 0,
  autoplay: true,
  pauseOnHover: true,
  smartSpeed: 1000,
  nav: false,
  dots:false,
  onDragged:  function(event) {
    if ( event.relatedTarget['_drag']['direction'] == 'left') {
      $('.slider-img-two').trigger('next.owl.carousel');
    } else if (event.relatedTarget['_drag']['direction'] == 'right') {
      $('.slider-img-two').trigger('prev.owl.carousel');
    }
  },
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

$('#imgSlider').owlCarousel({
  center: false,
  items: 1,
  loop: true,
  smartSpeed: 1000,
  stagePadding: 0,
  margin: 0,
  autoplay: true,
  pauseOnHover: true,
  nav: false,
  dots:false,
  onDragged:  function(event) {

    if ( event.relatedTarget['_drag']['direction'] == 'left') {
      $('.slider-one').trigger('next.owl.carousel');
    } else if (event.relatedTarget['_drag']['direction'] == 'right') {
      $('.slider-one').trigger('prev.owl.carousel');
    }
  },
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});


// **********======= Customizing Direction slider Buttons and Dragging *****=====//
$(".custom-next").click(function(e){
  e.preventDefault();
  $(".slider-img-two").trigger("next.owl.carousel");
  $(".slider-one").trigger("next.owl.carousel");
});

$(".custom-prev").click(function(e) {
  e.preventDefault();
  $(".slider-img-two").trigger("prev.owl.carousel");
  $(".slider-one").trigger("prev.owl.carousel");
});

var counter = function() {
  $(".section-counter").waypoint(function(direction) {
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

    $(".number").each(function() {
      var $this = $(this),
          num = $this.data("number");
    
      $this.animateNumber({
        number:num,
        numberStep: comma_separator_number_step
      }, 4000)
    });
  } , { offset: '95%' } )
}
counter();


// the gallery slider
$(".full-width-slider").owlCarousel({
  center: false,
  items: 1,
  loop: true,
  stagePadding: 0,
  margin: 0,
  autoplay: true,
  smartSpeed: 800,
  nav: false,
  dots:true,
  responsive:{
    600:{
      margin: 0,
      dots: true,
      items: 2
    },
    1000:{
      margin: 0,
      stagePadding: 0,
      dots: true,
      items: 3
    },
    1200:{
      margin: 0,
      stagePadding: 0,
      dots: true,
      items: 4
    }
}});
// fancybox to make a gallery from the second slider
$(".gallery-item").fancybox({
  'transitionIn'	:	'elastic',
  'transitionOut'	:	'elastic',
  'speedIn'		:	600, 
  'speedOut'		:	200, 
  'overlayShow'	:	false
});


/***================ testimonials slider ===============********* */

// ======= activating the first carousel slider
$('#secondTextSlider').owlCarousel({
  center: false,
  items: 1,
  loop: true,
  stagePadding: 0,
  margin: 0,
  autoplay: true,
  pauseOnHover: true,
  smartSpeed: 1000,
  nav: false,
  dots:false,
  onDragged:  function(event) {
    if ( event.relatedTarget['_drag']['direction'] == 'left') {
      $('#secondImgSlider').trigger('next.owl.carousel');
    } else if (event.relatedTarget['_drag']['direction'] == 'right') {
      $('#secondImgSlider').trigger('prev.owl.carousel');
    }
  },
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});

$('#secondImgSlider').owlCarousel({
  center: false,
  items: 1,
  loop: true,
  smartSpeed: 1000,
  stagePadding: 0,
  margin: 0,
  autoplay: true,
  pauseOnHover: true,
  nav: false,
  dots:false,
  onDragged:  function(event) {

    if ( event.relatedTarget['_drag']['direction'] == 'left') {
      $('#secondTextSlider').trigger('next.owl.carousel');
    } else if (event.relatedTarget['_drag']['direction'] == 'right') {
      $('#secondTextSlider').trigger('prev.owl.carousel');
    }
  },
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});


// **********======= Customizing Direction slider Buttons and Dragging *****=====//
$("#secondNext").click(function(e){
  e.preventDefault();
  $("#secondImgSlider").trigger("next.owl.carousel");
  $("#secondTextSlider").trigger("next.owl.carousel");
});

$("#secondPrev").click(function(e) {
  e.preventDefault();
  $("#secondImgSlider").trigger("prev.owl.carousel");
  $("#secondTextSlider").trigger("prev.owl.carousel");
});


/// services slider 

$('#servicesSlider').owlCarousel({
  center: false,
  items: 4,
  loop: true,
  stagePadding: 0,
  margin: 0,
  autoplay: true,
  smartSpeed: 800,
  nav: false,
  dots:true,
  responsive:{
    0:{
      items:1,
    },
    600:{
      margin: 20,
      dots: true,
      items: 2
    },
    1000:{
      margin: 30,
      stagePadding: 0,
      dots: true,
      items: 3
    },
    1200:{
      margin: 30,
      stagePadding: 0,
      dots: true,
      items: 4
    }
}});

// iframe fancy box
$("a.iframe").fancybox({
  'transitionIn'	:	'elastic',
  'transitionOut'	:	'elastic',
  'speedIn'		:	600, 
  'speedOut'		:	200, 
  'overlayShow'	:	false
});



///////////// mobile navigation bar //////////

$("#navBtn").click(function (e) {
  e.preventDefault();
  $("#mNavigationBar").toggleClass("mobile-nav-toggled");
  $(".dark-overlay").toggleClass("close-it");
  $("#navBtn span").css("background-color","#352961")
})

$(".dark-overlay").click(function() {
  $("#mNavigationBar").removeClass("mobileNav");
  $(this).removeClass("close-it");
})

function mobileNav() {
  var w = $(window).on("resize", function(event){
    console.log( $(this).width() );
  });
  console.log(w);
  if (w > 768) {
      $("#mNavigationBar").removeClass("mobileNav")
  }
}
mobileNav();
/*
function mobileNav() {
  var w = $(window).width();
  if (w > 768) {
    if($("#mNavigationBar").hasClass("mobile-nav")) {
      $("#mNavigationBar").removeClass("mobile-nav")
    }
  } else {
    document.getElementById("navBtn").addEventListener("click",function() {
      document.getElementById("mNavigationBar").classList.toggle("mobile-nav")
    })
  }
}
mobileNav();

var resizable = $(window).resize(function() {
  console.log($(window).width());
})
console.log(resizable);
*/
