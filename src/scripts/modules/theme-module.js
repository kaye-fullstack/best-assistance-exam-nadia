AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    var swiperLogical = new Swiper('.swiper-logical .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
      } 
      else {
        $(".header").removeClass("active");
      }
    });
  };

  const _swiperReading = () => {
    var swiperRead = new Swiper('.swiper-reading .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-reading',
        clickable: true,
      },
    });
  };

  const _filterBy = () => {
    $('select').change(function(){
      var value = $(this).val();
      if(value == 'filterBy'){
        $('#news', '#health', '#success', '#case').show();
      }
      $('#news').hide();
      if(value == 'news'){
          $('#news').show();
      } 
      $('#health').hide();
      if(value == 'health'){
        $('#health').show();
      } 
      $('#success').hide();
      if(value == 'success'){
        $('#success').show();
      } 
      $('#case').hide();
      if(value == 'case'){
      $('#case').show();
      } 
    })
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperReading();
    _filterBy();
  };

  return {
    init: init,
  };
})();
