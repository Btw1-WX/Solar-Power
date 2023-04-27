(function ($) {
    "use strict";
 
    /*-------------------------------------
        Animation on scroll: Number rotator
    -------------------------------------*/
   $("[data-appear-animation]").each(function() {
        var self      = $(this);
        var animation = self.data("appear-animation");
        var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);        

        if( $(window).width() > 959 ) { 
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
          self.html(self.data('to'));
        }
    });

    /*-------------------------------------
    Swiper Slider
    -------------------------------------*/
    var swiperslider = $(".swiper-slider");
    var x = 1;
    swiperslider.each(function () {  
               var carouselElement	= $(this);
                var columns = $(this).data('columns');
                var loop = $(this).data('loop');
                var autoplay2 = $(this).data('autoplay');
                var autoplayspeed1 = $(this).data('autoplayspeed');
                var val_nav = $(this).data('arrows');
                var nav_arrow = $(this).data('arrows-class');                
                var val_dots = $(this).data('dots');
                var val_center = $(this).data('center');
                var style = $(this).data('effect');
                var loopSlide = null;
                var sl_speed = 300; 

                carouselElement.addClass( 'pbmit-element-viewtype-carousel-' + x );


                if( columns === 1 ||  columns == 1.6 ){ 
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '1', /* 767 : */ '1', /* 575 : */ '1', /* 0 : */ '1' ];
                } else if( columns === 2 ||  columns == 2.1  ||  columns == 2.5){ 
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 3 ||  columns == 3.5 ){
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 4||  columns == 4.5 ){
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '4', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 5 ){
                  var responsive_items = [ /* 1199 : */ '5', /* 991 : */ '4', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 6 ){
                  var responsive_items = [ /* 1199 : */ '6', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
                } else {
                  var responsive_items = [ /* 1199 : */ '3', /* 991 : */ '3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                }

                if (val_dots === true) {
                  carouselElement.append('<div class="swiper-pagination swiper-pagination"></div>');
                }

                if(val_nav === true){
                   
                  if(!nav_arrow){
                    carouselElement.append( '<div class="swiper-buttons"></div>' );
                    carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
                    carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
                  } else{             
                    $('.' + nav_arrow).append( '<div class="swiper-buttons"></div>' );
                    $('.' + nav_arrow).append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
                    $('.' + nav_arrow).append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
                  }
                }

                var pagination_val = false;
                if (val_dots === true) {
                    pagination_val = {
                        el: '.swiper-pagination',
                        clickable: true,
                    };
                }
                var navigation_val = false;
                if(val_nav === true){
                  navigation_val =  {
                    nextEl: '.swiper-button-next-' + x,
                    prevEl: '.swiper-button-prev-' + x,
                  };
                }

                if(!style){
                  style = "slide";
                }    
                
                var margin_val = 30;
                if( $(carouselElement).data('margin') !== '' || $(carouselElement).data('margin') === '0'){
                  margin_val = $(carouselElement).data('margin');  
                } 
              
                if(carouselElement.hasClass('marquee')){ 
                  var reverse_direction = $(this).data('reverse');
                  if (!reverse_direction) reverse_direction = false;
                   var swiper2 = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
                     spaceBetween: 0,
                     centeredSlides: true,
                     speed: 5000,
                     autoplay: {
                         delay: 1,
                         disableOnInteraction: true,
                         reverseDirection: reverse_direction,
                     },
                     loop: true,
                     slidesPerView: 'auto',
                     allowTouchMove: false,
                     disableOnInteraction: true
                 });
               } else{                   
              var swiper = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
                  loop: loop, 
                  navigation: navigation_val,
                  pagination: pagination_val,
                  slidesPerView: columns,
                  spaceBetween: margin_val,
                  loopedSlides: loopSlide, 
				  autoplay : autoplay2,
                  effect: style,
                  speed: sl_speed, 
                  grabCursor: false,
                  centeredSlides: val_center,
                  breakpoints		  : {
                    1199 : {
                      slidesPerView	: responsive_items[0],
                    },
                    991	 : {					
                      slidesPerView	: responsive_items[1],
                    },
                    767	 : {
                      slidesPerView	: responsive_items[2],
                    },
                    575	 : {
                      slidesPerView	: responsive_items[3],
                    },
                    0	 : {
                      slidesPerView	: responsive_items[4],
                    }
                  }
              });
            }
              x = x + 1;             
          });
      
     /*-------------------------------------
    Cursor
    -------------------------------------*/
    var pbmit_text = $('.slider-tooltip .pbminfotech-post-content');
    if(pbmit_text.length){
      $("<div id='pbmit-cursor'><div class='pbmit-tooltip-content'></div></div>").appendTo("body");   
      var pbmit_cursor = $("#pbmit-cursor");
      $(document).on('mousemove', function(e) {
          var pbmit_x = e.clientX;
          var pbmit_y = e.clientY;
          pbmit_cursor.css({ "transform": "translate3d(" + pbmit_x + "px, " + pbmit_y + "px, 0px)" });
      })
      if (pbmit_text.length) {
          pbmit_text.each(function() {
              var elm = $(this);
              var pbmit_html = elm.find('.pbmit-tooltip').html();
              elm.on('mouseenter', function() {
                  pbmit_cursor.addClass('active').find('.pbmit-tooltip-content').html(pbmit_html);
              }).on('mouseleave', function(e) {
                  pbmit_cursor.removeClass('active').find('.pbmit-tooltip-content').html('');
              });
          });
      }
    } 

     /*-------------------------------------
    Scroll To Top
    -------------------------------------*/
    $('body').append('<a href="#" class="scroll-to-top"><i class="pbmit-base-icon-up-open-big"></i></a>');    
    var btn = $('.scroll-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /*-------------------------------------
    Header Search Form
    -------------------------------------*/
    $( ".pbmit-header-search-btn a" ).on('click', function() {     
      $(".pbmit-search-overlay").addClass('st-show');
      $("body").addClass('st-prevent-scroll');            
      return false;
    });   
    $( ".pbmit-icon-close" ).on('click', function() {
          $(".pbmit-search-overlay").removeClass('st-show');
        $("body").removeClass('st-prevent-scroll');            
        return false;
    }); 
    $('.pbmit-site-searchform').on('click', function(event){
      event.stopPropagation();
    }); 

    /*-------------------------------------
    Active Hover
    -------------------------------------*/ 
    $( ".active-onhover .pbmit-ihbox-style-24:nth-child(2)" ).addClass('pbmit-mihbox-hover-active');
    
      $( ".active-onhover .pbmit-ihbox-style-24" ).mouseover(function() {
        var main_row = $( this ).closest( '.active-onhover' );
        $('.pbmit-ihbox-style-24', main_row).removeClass('pbmit-mihbox-hover-active'); 
        $(this).addClass('pbmit-mihbox-hover-active');
      }).mouseout(function() {
        var main_row = $( this ).closest( '.active-onhover' );
        $('.pbmit-ihbox-style-24', main_row).removeClass('pbmit-mihbox-hover-active');
        $('.pbmit-ihbox-style-24:nth-child(2)', main_row).addClass('pbmit-mihbox-hover-active');
       
      });

    /*-------------------------------------
      Mobile Menu
    -------------------------------------*/     
     $('.navbar-toggler,.closepanel').on('click', function () { 
      $("header").toggleClass("active");
    }); 

    
      
    /*-------------------------------------
    Magnific Popup
    -------------------------------------*/
    var i_type = 'image';
    $('.pbmin-lightbox-video, .pbmin-lightbox-video a, a.pbmit-lightbox').each(function(){
        if( $(this).hasClass('pbmin-lightbox-video')){ 
          i_type = 'iframe';
        } else {
          i_type = 'image';
        }  
        $(this).magnificPopup({type:i_type});
    });   

    /*-------------------------------------
     Accordion
    -------------------------------------*/

    $('.accordion .accordion-item').on('click', function () { 
      var e = $(this);  
      $(this).parent().find('.accordion-item').removeClass('active');        
      if(!$(this).find('.accordion-button').hasClass('collapsed')){
        $(this).addClass('active');
      }  
    }); 
  
    /*-------------------------------------
      Add plus icon in menu
      -------------------------------------*/
    $( ".main-menu ul.navigation li.dropdown").append( "<span class='righticon'><i class='pbmit-base-icon-down-open-big'></i></span>" );
    
    /*-------------------------------------
    Responsive Menu
    -------------------------------------*/ 
    $('.main-menu ul.navigation li.dropdown .righticon').on('click', function() {
           $(this).siblings().toggleClass('open');
           $(this).find('i').toggleClass('pbmit-base-icon-down-open-big pbmit-base-icon-up-open-big');
           return false;
    });  

    /*-------------------------------------
    Sticky Header
    -------------------------------------*/ 
    $(window).scroll(function(){
        var sticky = $('.site-header-menu'),
        scroll = $(window).scrollTop();
        if (scroll >= 90) sticky.addClass('sticky-header');
        else sticky.removeClass('sticky-header');
    });
	
	 /*-------------------------------------
    Stretched Div
    -------------------------------------*/ 	
	var document_width = $(document).width();
	function pbmit_col_stretched(){
		$('.pbmit-col-stretched-yes').each(function() {
			var this_ele = $(this);
			var window_width = jQuery(window).width();
			var main_width = $('.container').width();
			var extra_width = ((window_width - main_width) / 2);  
			if (window_width < 1200){
				extra_width = 0;
			}
			if (this_ele.hasClass('pbmit-col-right')) { 
				$('.pbmit-col-stretched-right', this_ele).css('margin-right', '-' + extra_width + 'px'); 
			} else { 
				$('.pbmit-col-stretched-left', this_ele).css('margin-left', '-' + extra_width + 'px'); 
			}
		});
	}
	$(window).resize(function(){
		pbmit_col_stretched();
	});
	pbmit_col_stretched();

    /*-------------------------------------
    Circle Progressbar
    -------------------------------------*/
    $('.pbmit-circle-outer').each(function() {

      var this_circle = $(this);

      // Circle settings
      var emptyFill_val = "rgba(0, 0, 0, 0)";
      var thickness_val = 10;
      var fill_val = this_circle.data('fill');
      var size_val = 110;

      if (typeof this_circle.data('emptyfill') !== 'undefined' && this_circle.data('emptyfill') !== '') {
          emptyFill_val = this_circle.data('emptyfill');
      }
      if (typeof this_circle.data('thickness') !== 'undefined' && this_circle.data('thickness') !== '') {
          thickness_val = this_circle.data('thickness');
      }
      if (typeof this_circle.data('size') !== 'undefined' && this_circle.data('size') !== '') {
          size_val = this_circle.data('size');
      }
      if (typeof this_circle.data('filltype') !== 'undefined' && this_circle.data('filltype') === 'gradient') {
          fill_val = { gradient: [this_circle.data('gradient1'), this_circle.data('gradient2')], gradientAngle: Math.PI / 4 };
      }

      if (typeof $.fn.circleProgress === "function") {
          var digit = this_circle.data('digit');
          var before = this_circle.data('before');
          var after = this_circle.data('after');
          var digit = Number(digit);
          var short_digit = (digit / 100);

          $('.pbmit-circle', this_circle).circleProgress({
              value: 0,
              size: size_val,
              startAngle: -Math.PI / 4 * 2,
              thickness: thickness_val,
              emptyFill: emptyFill_val,
              fill: fill_val
          }).on('circle-animation-progress', function(event, progress, stepValue) { // Rotate number when animating
              this_circle.find('.pbmit-circle-number').html(before + Math.round(stepValue * 100) + after);
          });
      }
      
      this_circle.waypoint(function(direction) {
          if (!this_circle.hasClass('completed')) {
              // Redraw when view
              if (typeof $.fn.circleProgress === "function") {
                  $('.pbmit-circle', this_circle).circleProgress({ value: short_digit });
              };
              this_circle.addClass('completed');
          }
      }, { offset: '85%' });

  });

})($);

// Our Clients
// const clientsContainer = document.querySelector('.clients-container');
// const clientsControlsContainer = document.querySelector('.clients-controls');
// const clientsControls = ['previous', 'next'];
// const clientsItems = document.querySelectorAll('.clients-item');

// class Carousel{
//     constructor(container, items,controls){
//         this.carouselContainer = container;
//         this.carouselControls = controls;
//         this.carouselArray = [...items];
//     }
//     updateclients(){
//         this.carouselArray.forEach(e1 =>{
//             e1.classList.remove('clients-item-1');
//             e1.classList.remove('clients-item-2');
//             e1.classList.remove('clients-item-3');
//             e1.classList.remove('clients-item-4');
//             e1.classList.remove('clients-item-5');
//             e1.classList.remove('clients-item-6');
//             e1.classList.remove('clients-item-7');
//             e1.classList.remove('clients-item-8');
//             e1.classList.remove('clients-item-9');
//             e1.classList.remove('clients-item-10');
//         });


//         this.carouselArray.slice(0,10).forEach((e1,i)=>{
//             e1.classList.add(`clients-item-${i+1}`);
//         })
//     }

//     setCurrentState(direction){
//         if(direction.className == 'clients-controls-previous'){
//             this.carouselArray.unshift(this.carouselArray.pop());
//         }else{
//             this.carouselArray.push(this.carouselArray.shift());
//         }
//         this.updateclients();
//     }
//     setControls(){
//         this.carouselControls.forEach(control =>{
//             clientsControlsContainer.appendChild(document.createElement('button')).className = `clients-controls-${control}`;
//             document.querySelector(`.clients-controls-${control}`).innerText = control;
//         });
//     }

//     useControls(){
//         const triggers = [...clientsControlsContainer.childNodes];
//         triggers.forEach(control=>{
//             control.addEventListener('click', e =>{
//                 e.preventDefault();
//                 this.setCurrentState(control);
//             });
//         });
//     }
// }

// const exampleCarousel = new Carousel(clientsContainer,clientsItems,clientsControls);
// exampleCarousel.setControls();
// exampleCarousel.useControls();



//autoplay
// window.onload = setInterval(function () {document.querySelector(".clients-controls-next").click();}, 5000);
// document.querySelector(".clients-controls-next").click();

    /*-------------------------------------
	 Slider
    -------------------------------------*/
	var swiper = new Swiper(".Swiperslider_two", {
		spaceBetween: 0,
		direction: 'vertical',
		slidesPerView: 3,
		freeMode: true 
	});
	var swiper2 = new Swiper(".Swiperslidertwo", {
		effect: "fade",
		spaceBetween: 10,
		thumbs: {
		swiper: swiper,
		},
	});

  AOS.init();


  // Readmore Function

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }