
$(document).ready(function(){
  
  /* pre loader*/
  
  
  preloaderFadeOutTime = 700;
  function hidePreloader() {
    var preloader = $('.sk-chase');
    $('.whole-page').fadeIn();
    preloader.fadeOut(preloaderFadeOutTime);
  }hidePreloader();
  $('.load-layer').fadeOut();
  
  
  /* pre loader*/
  
  
  
  
  /* user hover*/
  /* user hover*/
  $(".login , .accountbutton").mouseenter(function(){
    $('.accountbutton').show();
  });
  $(".login , .accountbutton").mouseleave(function(){
    $('.accountbutton').hide();
  });
  
  /* user hover*/
  /* user hover*/
  
  
  
  /*scroll to contact us*/
  /*scroll to contact us*/
  
  $(' nav li a').click(function(event){
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 1000);
  }); 
  
  $(' navbar li a').click(function(event){
    $('html , body').animate({
      scrollTop: $('#' + $(this).data("scrolling")).offset().top
    }, 1000);
  }); 
  
  /*scroll to contact us*/
  /*scroll to contact us*/
  
  /* tabs */
  /* tabs */
  /* tabs */
  $('ul.package-tabs li').click(function(){
    var tab_id = $(this).attr('tab-data');
    
    $('ul.package-tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });
  /* tabs */
  /* tabs */
  /* tabs */
  
  
  /*  VIDEO OTO PLAY WHEN SCROLL*/
  /*  VIDEO OTO PLAY WHEN SCROLL*/
  // $(window).scroll(function() {
  //   var top_of_element = $(".two .video").offset().top;
  //   var bottom_of_element = $(".two .video").offset().top + $(".two .video").outerHeight();
  //   var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  //   var top_of_screen = $(window).scrollTop();
  
  //   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
  //    $('.two .video-cont video').trigger('play');
  //    } else {
  //      $('.two .video-cont video').trigger('pause');
  //    }
  // });
  /*  VIDEO OTO PLAY WHEN SCROLL*/
  /*  VIDEO OTO PLAY WHEN SCROLL*/
  
  /* HOVER FUNCTIONS*/
  /* HOVER FUNCTIONS*/
  /* HOVER FUNCTIONS*/
  
  $("nav .popsubfather").hover(function(){
    $('nav .popsubchild').show();
    $('.NB .fa-chevron-down').addClass('nav-branch-hint-hover');
  }, function(){
    $('nav .popsubchild').hide();
    $('.NB .fa-chevron-down').removeClass('nav-branch-hint-hover');
  });
  
  
  
  $("nav .popsubchild li").hover(function(){
    $(this).find("a").css({"color" : "#fff" });
  }, function(){
    $(this).find("a").css({"color" : "#000" });
  });
  
  
  $(".four .prog").hover(function(){
    $(this).css({"margin-top" : "30px" ,"filter": "grayscale(0%)","transition-duration" : ".5s"}); 
  }, function(){
    $(this).css({"margin-top" : "0px" ,"filter": "grayscale(100%)", "transition-duration" : ".5s"});
  });
  
  
  $(".fees .package").hover(function(){
    $(this).css({"transition-duration" : "0.25s" ,"-webkit-transform": " scale(1.1)","-ms-transform" : "scale(1.1)" , "transform":"scale(1.1)" });
    $(this).find("h4").css({"border-top" : "1px solid #874000" , "border-bottom" : "1px solid #874000"});
    $(this).find(".spo").addClass("spohover");
    $(this).find(".price").addClass("pricehover");
  }, function(){
    $(this).css({"transition-duration" : "0.25s" ,"-webkit-transform": " scale(1)","-ms-transform" : "scale(1)" , "transform":"scale(1)"});
    $(this).find("h4").css({"border-top" : "1px solid #deba4e" , "border-bottom" : "1px solid #deba4e"});
    $(this).find(".spo").removeClass("spohover");
    $(this).find(".price").removeClass("pricehover");
    
  });
  
  
  $(".fees .get-in-touch").hover(function(){
    $(this).find('.fa-whatsapp').show()
    $(this).find('.get-started p').hide()
    
    // $(".fees .fa-whatsapp").css({"transition-duration" : ".5s", "display":"block"}); 
    // $(".fees .get-in-touch .get-started p").css({ "display":"none" ,"transition-duration" : ".5s"}); 
    
  }, function(){
    
    
    $(this).find('.fa-whatsapp').hide()
    $(this).find('.get-started p').show()
    // $(".fees .fa-whatsapp").css({"transition-duration" : ".5s", "display":"none"}); 
    // $(".fees .get-in-touch .get-started p").css({ "display":"block","transition-duration" : ".5s"}); 
  });
  
  /* HOVER FUNCTIONS*/
  /* HOVER FUNCTIONS*/
  /* HOVER FUNCTIONS*/
  
  
  
  
  
  /* ON CLICK FUNCTIONS*/
  /* ON CLICK FUNCTIONS*/
  /* ON CLICK FUNCTIONS*/
  
  $(".fees .package").on("click", function(){
    $(this).find(".detail-toggler").slideToggle();
  });
  
  $(".navbar .subfather").on("click" , function(){
    $(".navbar .subchild").slideToggle();
  });
  /* ON CLICK FUNCTIONS*/
  /* ON CLICK FUNCTIONS*/
  /* ON CLICK FUNCTIONS*/
  
  $(window).scroll(function(){
    
    //parallex backgroubd scrolling
    
    $('.parallax-window').parallax({speed:0.3});
    
    
    //go to top buttom
    
    // if ($(this).scrollTop() > 650) {
    //     $('#myBtn').fadeIn();
    // } else {
    //     $('#myBtn').fadeOut();
    // }
    
    
    
    
    
    
    
    //color nav shifting when touches .three
    
    // var div1 = $("nav");
    // var div2 = $(".three");
    // var div1_top = div1.offset().top;
    // var div2_top = div2.offset().top;
    // var div1_bottom = div1_top + div1.height();
    // var div2_bottom = div2_top + div2.height();
    
    // if (div1_bottom >= div2_top && div1_top < div2_bottom) {
    
    //   $('nav').css({
    //     'background-color' : 'transparent',
    //   })
    
    //   $('nav a').css({
    //     'color' : 'white',
    //   })
    //   $('.logo').css({
    //     'background-color' : 'transparent',
    //   })
    
    // }else{f
    //   $('nav').css({
    //     'background-color' : 'white',
    //   })
    
    //   $('nav a').css({
    //     'color' : '#333',
    //   })
    //   $('.logo').css({
    //     'background-color' : 'white',
    //   })
    // }
    
    
    
    
    
    if($(document).scrollTop() > $('.one').height()){   
      
      $('nav').css({ 'width' : '95%','margin': '30px auto auto','box-shadow': 'grey 5px 5px 10px'})
      
      $('.tog .fa-bars').css({
        'transition-duration' :'0.5s',
      })
      
    }else{
      
      $('nav').css({ 'width' : '100%','margin': '0px auto auto','box-shadow': 'none'});
      
      $('.tog .fa-bars').css({
        'transition-duration' :'0.5s'
      })
    }
    
    
    
  });//scrollEND

});//End READY



/* 1st slider in home page */
/* 1st slider in home page */
/* 1st slider in home page */

var swiper = new Swiper('.one .swiper-container', {
  speed: 600,
  parallax: true,
  
  pagination: {
    el: '.one .swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 20000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




/* card slider  */
/* card slider  */
/* card slider  */
var swiper = new Swiper('.six .swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.six .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// var swiper = new Swiper('.teacher-slider .swiper-container', {
//   slidesPerView: 3,
//   spaceBetween: 3,
//   slidesPerGroup: 3,
//   loop: false,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//   320:{
//   slidesPerView: 1,
//   slidesPerGroup: 1
//   },

//   500:{
//   slidesPerView: 2,
//   slidesPerGroup: 2
//   },
//   951:{
//   slidesPerView: 3,
//   slidesPerGroup: 3
//   }
// },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


/*  Hamburger   */
/*  Hamburger   */
/*  Hamburger   */


(function() {
  
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('navbar'),
    
    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };
  
  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
}());


function goBack() {
  window.history.back();
}






