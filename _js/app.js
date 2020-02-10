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
  };
});

$(function() {
  //headerスクロールメニュー
  var $header = $(".header__scroll");
  var $header_logo = $(".header__logo img");

  if (!$header.length) return false;

  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $header.addClass("on");
      $header_logo.attr("src", "img/header/header_logo_02.svg");
    } else {
      $header.removeClass("on");
      $header_logo.attr("src", "img/header/header_logo_01.svg");
    }
  });
});

$(function() {
  //リクルートモーダル　職種募集部分
  $(".recruit__recruitingList-item").on("click", function() {
    var index = $(this).index() + 1;
    $(".recruit__modalList").fadeIn();
    $(".recruit__modalList li:nth-child(" + index + ")").fadeToggle(200);
  });

  $(".recruit__modalList-Close").on("click", function() {
    $(".recruit__modalList li").hide();
    $(this)
      .parents()
      .find(".recruit__modalList")
      .fadeOut();
  });
});

$(function() {
  //footer
  $(".footer__menuBox-title").on("click", function() {
    $(this)
      .next()
      .slideToggle();
    $(this).toggleClass("on");
  });

  //sp nav menu
  $(".navSp__Button").on("click", function() {
    $(this).toggleClass("on");
    $(this)
      .prev()
      .toggleClass("on");
  });

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

$(function() {
  //aboutページ
  var fadeAdd = function(element, className) {
    $(element).addClass(className);
  };

  var fadeItem1 = function() {
    fadeAdd(".aboutPage__mainvisual-title", "in-visible");
  };
  var fadeItem2 = function() {
    fadeAdd(".aboutPage__mainvisual-text", "in-visible");
  };

  //要素がないときは実行しない
  var $taget = $(".aboutPage__mainvisual");
  if (!$taget.length) return false;

  setTimeout(fadeItem1, 2000);
  setTimeout(fadeItem2, 3000);

  //about scroll event
  $(window).scroll(function() {
    //target
    var mission = $(".aboutPage__mission").offset().top;
    var vision = $(".aboutPage__vision").offset().top;
    var value = $(".aboutPage__value").offset().top;

    //windowの高さ
    var wh = $(window).height();
    //windowスクロール
    var scroll = $(this).scrollTop();

    if (scroll > mission - wh + 250) {
      fadeAdd(".aboutPage__mission", "in-visible");
    }

    if (scroll > vision - wh + 150) {
      fadeAdd(".aboutPage__vision", "in-visible");
    }

    if (scroll > value - wh + 150) {
      fadeAdd(".aboutPage__value", "in-visible");
    }
  });
});

$(function() {
  //  form modal
  $(".privacy-modal-Button").on("click", function() {
    $(".privacy-modal-contents").fadeIn();
  });

  $(".privacy-modal-close-Button").on("click", function() {
    $(".privacy-modal-contents").fadeOut();
  });
});
