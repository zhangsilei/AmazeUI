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

/*节点加载完毕后的页面渲染操作*/
$(document).ready(function(){    
  setLiSize();
  setTipLoc();

  /*更多按钮事件*/
  var count = 3;     // 默认显示3个电影      
  var lis = $("#movie-list").children("li");      
  lis.css("display","none");
  for(var i = 0; i < count; i++){
    $("#movie-list").children("li").eq(i).css("display","block");       
  } 
  $("#more").click(function(){ 
    if(count == lis.length){     
      alert("没有更多了~");     // 后期可以改成弹框
      return;   
    }else{   
      count++;
      $("#movie-list").children("li").eq(count-1).css("display","block");
    }     
  })

  /*登陆事件*/
  $(".login-btn").click(function(){
    window.location.href = "amaze_login.html";
  })

})    

/*窗口大小改变时的事件*/
$(window).resize(function(){
  setLiSize();
  setTipLoc();    
})

/*设置每行链接的宽高与<li>的高度一致*/
var setLiSize = function(){
  var aWidth = $(".content li:eq(0)").width();
  var aHeight = $(".content img:eq(0)").height();   
  $(".content a").css("width", aWidth);    
  $(".content a").css("height", aHeight);       
}

/*设置小徽章的排版*/
var setTipLoc = function(){
  var cWidth = document.documentElement.clientWidth;
  var tip = $(".content-title-3D");     // 3D IMAX徽章  
  if(cWidth <= 380){     // 超小设备
    tip.css("display", "block");   
    tip.css("width", 66);
  }else{
    tip.css("display", "inline-block");
  }
}