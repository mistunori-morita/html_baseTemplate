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

  setTimeout(fadeItem1, 2000);
  setTimeout(fadeItem2, 3000);

  //
});
