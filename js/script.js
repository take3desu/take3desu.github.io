// 固定ヘッダー
$(function () {
  var $win = $(window),
      $fv = $('.fv')
      $header = $('.header'),
      fvHeight = $fv.outerHeight();
      fixedClass = 'fixed';

  $win.on('load scroll', function(){
    var value = $(this).scrollTop();
    if($win.width() > 768){
      if( value > fvHeight){
        $header.addClass(fixedClass);
      } else{
        $header.removeClass(fixedClass);
      }
    }
  });
});

// アコーディオン

$(function(){
  $('.jsAccordionTitle').click(function(){
    $(this).next().toggleClass('is-open');
    $(this).toggleClass('is-active');
  });
});

// スワイパー

var mySwiper = new Swiper ('.swiper-container', {
  // ここからオプション
  loop: true,      
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides:true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    380: {
      slidesPerView: 3,
    }
  }  
})
    
 //  ハンバーガー
  
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive')
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('.sp-nav').css('visibility', 'visible');
      $('html').css('overflow', 'hidden');
    } else {
      $(this).attr('aria-expanded', false);
      $('.sp-nav').css('visibility', 'hidden');
      $('html').css('overflow', 'auto');
    }
  });


  // ナビクリック時の挙動
  $('.nav-item').click(function(){
    if ($('#js-hamburger').attr('aria-expanded') == 'true') {
      $('#js-hamburger').attr('aria-expanded', false);
      $('.sp-nav').css('visibility', 'hidden');
      $('html').css('overflow', 'auto');
    }
  });

  $(window).on('load resize', function(){
    if (window.matchMedia('(min-width: 769px)').matches){
      $('.sp-nav').css('visibility','visible');
    } else {
      $('.sp-nav').css('visibility','hidden');
    }
  });



  
    // モーダルエリア

    $(function(){
      $('#openModal').click(function(){
        $('#modalArea').toggleClass('is-show');
    
      });
      $('#closeModal').click(function(){
        $('#modalArea').toggleClass('is-show');
      });
      $('#modalBg').click(function(){
        $('#modalArea').toggleClass('is-show');
      });
    });

  