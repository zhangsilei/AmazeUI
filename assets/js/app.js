/*需要提前加载的组件*/
(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });  

  /*首页轮播图按钮*/
  $('.btn-loading-example').click(function () {
    var $btn = $(this)
    $btn.button('loading');
      setTimeout(function(){
        $btn.button('reset');
    }, 5000);
  });  
})(jQuery);     

$(document).ready(function(){

  /*更多按钮事件*/
  /*var showCount = -1;   // 每次点击更多显示一个电影信息
  var lis = $("#movie-list").children("li");   
  lis.css("display","none");
  $("#more").click(function(){ 
    if(showCount > lis.length){   
      return;
    }else{
      showCount++;   
      $("#movie-list").children("li").eq(showCount).css("display","block");
    }     
  })*/

  /*设置每行内容的高度*/
  window.onresize = function(){
    setLiSize();
  }
  setLiSize();
})    

/*设置每行链接的宽高*/
var setLiSize = function(){
  var aWidth = $(".content li:eq(0)").width();
  var aHeight = $(".content img:eq(0)").height();   
  $(".content a").css("width", aWidth);    
  $(".content a").css("height", aHeight);    
}