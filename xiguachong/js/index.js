$(document).ready(function(){
  // 顶部tab切换
  $(".top > a").click(function(){
    $(".top-a-current").removeClass("top-a-current");
    $(this).addClass("top-a-current");    
  })
  // 视频遮罩层的位置
  var video = $(".video");
  var zLeft = video.css("marginLeft");
  $(".zhezhao").css("left",zLeft);
  // 播放按钮位置
  var play = $(".play");
  var pTop = (video.height() - play.height()) / 2;
  var pLeft = (video.width() - play.width()) / 2;   
  play.css("top",pTop);
  play.css("left",pLeft);
  play.css("display","block");  // 获得位置后再显示
  play.click(function(){
    alert("play");
  })
  // 概况标题
  var intro = $(".intro");
  var introTitle = $(".intro-title");
  var iLeft= (intro.width() - introTitle.width()) / 2;
  introTitle.css("top",video.height());
  introTitle.css("left",iLeft);
  introTitle.css("display","block");
  // 横线
  var introLine = $(".intro-line");
  introLine.css("width",introTitle.width());
  introLine.css("top",video.height());
  introLine.css("left",iLeft);
  introLine.css("display","block");  
  // 概况内容    
  var introContent = $(".intro-content");
  introContent.css("top",video.height());    
  introContent.css("display","block");
  // 支持按钮
  var introSupport = $(".intro-support");
  introSupport.css("top",video.height());
  introSupport.css("left",(intro.width() - introSupport.width())/2);
  introSupport.css("display","block");
})

// 浏览器窗口缩放时
$(window).resize(function(){
  
})



	
 