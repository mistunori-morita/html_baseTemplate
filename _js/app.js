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

  //文字色変更 mv
  var $pageTaget = $(".mainVisual__Lead");
  if (!$pageTaget.length) return false;
  var count = 0;
  var countup = function() {
    // console.log(count++);
    count++;
    var id = setTimeout(countup, 1000);

    if (count == 8) {
      $pageTaget.children().css("color", "#fff");
    } else if (count > 13) {
      $pageTaget.children().css("color", "#5576ff");

      count = 0;
    }
  };

  window.onload = function() {
    setTimeout(fadeItem1, 2000);
    setTimeout(fadeItem2, 3000);
    countup();
  };
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
});
