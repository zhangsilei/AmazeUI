$(document).ready(function(){
  // 顶部tab切换
  $(".top > a").click(function(){
    $(".top-a-current").removeClass("top-a-current");
    $(this).addClass("top-a-current");    
  })
  // 播放按钮
  var bTop = ($(".video").height()-$(".play").height())/2;
  var bLeft = ($(".video").width()-$(".play").width())/2;
  $(".play").css("top",bTop);
  $(".play").css("left",bLeft);    
  // 众筹简介 
  $(".item div").css("top",$(".video").css("height"));
  $(".item div").css("height",$(".video").css("height"));
  // 简介内容
  var tWidth = $(".title").width();
  $(".title").css("left",($(".item div").width()-tWidth)/2);
})



	
 