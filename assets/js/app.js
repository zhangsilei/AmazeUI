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
  var showCount = -1;   // 每次点击更多显示一个电影信息
  var lis = $("#movie-list").children("li");   
  lis.css("display","none");
  $("#more").click(function(){ 
    if(showCount > lis.length){
      return;
    }else{
      showCount++;   
      $("#movie-list").children("li").eq(showCount).css("display","block");
    }
  })
})
