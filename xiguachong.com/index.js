$(function() {
  $('.am-slider').flexslider({
    direction: "vertical",     // 垂直播放
    animationLoop: false,     // 不循环播放
  	slideshow: false,     // 不自动播放
  	controlNav: false,     // 不显示控制点
  	directionNav: false     // 不显示上/下一个按钮
  });
  setEleStyle();
});

/**
 * 设置部分元素样式
 */
function setEleStyle(){
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();

  // 每个li的高度等于屏幕高度
  $("#list li > img").each(function(){ 
    fullHeight($(this), screenHeight);
  })  
  $("#list li > div").each(function(){
    fullHeight($(this), screenHeight);
  })

  function fullHeight(element, height){
    element.height(height);
  }
}

$(window).resize(function(){
  setEleStyle();
})