// 読み込み時
$(function() {
  var fadeAdd = function(element, className) {
    $(element).addClass(className);
  };

  var fadeItem1 = function() {
    fadeAdd(".mainVisual__Lead-title", "in-visible");
  };
  var fadeItem2 = function() {
    fadeAdd(".mainVisual__Lead-sub", "in-visible");
  };


  window.onload = function() {
    setTimeout(fadeItem1, 2000);
    setTimeout(fadeItem2, 3000);
  }


  //footer
  $('.footer__menuBox-title').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('on');
  });

  //sp nav menu
  $('.navSp__Button').on('click', function(){
    $(this).toggleClass('on');
    $(this).prev().toggleClass('on');
  })

});


$(function() {
  var $pageTop = $(".footer__back");
  if (!$pageTop.length) return false;

  $pageTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });

  $('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position
      },
      500,
      "swing"
    );
    return false;
  });
});
