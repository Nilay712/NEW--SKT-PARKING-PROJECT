
$('.timonai-silder-sec').slick({
   slidesToShow: 2,
  slidesToScroll: 3,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  autoplay: true,
dots:true,
  
 responsive: [
        {
        breakpoint:575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 4,
        arrows: false,
   
        autoplay: true,
        autoplaySpeed: 5000,

        }
      } ,
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 768,
        settings: {
      
         slidesToShow: 2,
        slidesToScroll: 2,
          autoplay: true,
      autoplaySpeed: 5000,
                            
        }
      }




    ]
     
});






$(document).ready(function(){

    $(".menu-toggle .open").click(function(){
        $(".nav_link").slideDown();
        $(".open").hide();
        $(".close").show();
    });

    $(".menu-toggle .close").click(function(){
        $(".nav_link").slideUp();
        $(".close").hide();
        $(".open").show();
    });


      $('.banner-part').slick({
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                autoplay: true,
                autoplaySpeed: 5000,   autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },

                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },

                    {
                        breakpoint: 1199,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },
                    
                    
                    
                ]
            });
          

            
        });


var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
      
    });



  $(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.footer-end-icon').fadeIn();
  } else {
    $('.footer-end-icon').fadeOut();
  }
});

$('.footer-end-icon').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 600);
  return false;
});


   