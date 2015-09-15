$(document).ready(function(){
  setEleLocation();
  // 顶部tab切换
  $(".top > a").click(function(){
    $(".top-a-current").removeClass("top-a-current");
    $(this).addClass("top-a-current");  
    // 更换页面内容
    if($(this).html() == "推荐"){     // 推荐tab

      $(".paihang ul").empty();     // 移除所有排行内容   
      $(".zuixin .item").empty();     // 移除所有最新内容 
      if($(".main").html() == "" || $(".main").html() == null){
        $(".tuijian").append(
          "<div class='main'>" +
          "<img src='images/index/shipin.png' class='am-img-responsive video'/>" +
          "<img src='images/index/shipinmengban@2x.png' class='am-img-responsive zhezhao'/>" +
          "<img src='images/index/shipin_btn.png' class='am-img-responsive play'/>" +
          "<img src='images/index/img1.png' class='am-img-responsive intro'/>" +
          "<span class='intro-title'>某某某音乐会</span>" +
          "<div class='intro-line'></div>" +
          "<div class='intro-content'>" +
          "<img src='images/index/mubiao.png' class='am-img-responsive'/>" +
          "<span>目标1500</span>" +
          "<img src='images/index/yichou.png' class='am-img-responsive' style='margin-left:2rem;'/>" +
          "<span style='margin-right: 2rem;'>已筹200</span>" +
          "<img src='images/index/shengyu.png' class='am-img-responsive'/>" +
          "<span>剩余8天</span></div>" +
          "<img src='images/index/support.png' class='am-img-responsive intro-support'/></div>"
        );
        $(".paihang").css("display","none");
        setEleLocation();
      }

    }else if($(this).html() == "排行"){     // 排行tab

      $(".tuijian .main").remove();     // 移除所有推荐内容  
      $(".zuixin .item").empty();     // 移除所有最新内容     
      if($(".paihang ul").html() == "" || $(".paihang ul").html() == null){
        $(".paihang").css("display","block");
        $(".am-list").append(
          "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left' style='background:#333;'>" +
          "<div class='am-u-sm-4 am-list-thumb'>" +
          "<img src='images/index/img1.png' class='am-img-responsive paihang-img'/></div>" +
          "<div class='am-u-sm-8 am-list-main'>" +
          "<p class='paihang-title'>2015年周杰伦世界巡回演唱会-南京站</p>" +
          "<div class='paihang-content'>" + 
          "<span>目标1500</span>" +
          "<span>已筹200</span>" +  
          "<span>剩余8天</span></div>" +   
          "<img class='paihang-star' src='images/introduce/star-1.png'>" +    
          "<img class='paihang-star' src='images/introduce/star-1.png'>" + 
          "<img class='paihang-star' src='images/introduce/star-1.png'>" +
          "<img class='paihang-star' src='images/introduce/star-1.png'>" +
          "<img class='paihang-star' src='images/introduce/star-1.png'>" +
          "<a class='paihang-support' href='##'>立即支持</a>" +
          "<img class='paihang-jiantou' src='images/paihang/xiangqing.png'></div></li>"
        );
      }

    }else if($(this).html() == "最新"){     // 最新tab

      $(".tuijian .main").remove();     // 移除所有推荐内容  
      $(".paihang ul").empty();     // 移除所有排行内容
      if($(".zuixin .item").html() == "" || $(".zuixin .item").html() == null){
        $(".zuixin .item").append(
          "<img class='am-img-responsive zuixin-img' src='images/index/tupian-1.png'>" +
          "<div class='zuixin-content'>" +
          "<span class='zuixin-title' style='font-size: 1.6rem;margin-right: 0rem;'>某某某音乐会</span>" +
          "<span>2015-8-17</span><span>13:00</span><span>剩余12天</span><span>49人浏览</span>" +
          "<a class='zuixin-support' href='##'>立即支持</a></div>"
        );
        $(".paihang").css("display","none");
      }

    }
  })
})

// 浏览器窗口缩放时
$(window).resize(function(){
   setEleLocation();
})

/**
 * 动态设置页面元素的位置
 */
var setEleLocation = function(){
  var screenWidth = $(window).width();
  // 视频遮罩层的位置
  var video = $(".video");
  var zLeft = video.css("marginLeft");
  $(".zhezhao").css("left",zLeft);
  // 播放按钮位置
  var play = $(".play");
  var pTop = (video.height() - play.height()) / 2;
  var pLeft = (screenWidth - play.width()) / 2;   
  play.css("top",pTop);
  play.css("left",pLeft);
  play.css("display","block");     // 获得位置后再显示
  play.click(function(){
    alert("play");
  })
  // 概况标题
  var intro = $(".intro");
  var introTitle = $(".intro-title");
  var iLeft= (screenWidth - introTitle.width()) / 2;
  if(intro.width() < 750){
    introTitle.css("marginTop","8%");
  }
  if(intro.width() == 750){
    introTitle.css("marginTop","6.1rem");
  }
  introTitle.css("top",video.height());    
  introTitle.css("left",iLeft);
  introTitle.css("display","block");
  // 横线
  var introLine = $(".intro-line");
  introLine.css("width",introTitle.width());
  introLine.css("top",video.height());
  introLine.css("left",iLeft);
  introLine.css("marginTop",parseInt(introTitle.css("marginTop"))+introTitle.height());
  introLine.css("display","block");  
  // 概况内容    
  var introContent = $(".intro-content");
  if(intro.width() < 750){
    introContent.css("marginTop","22%");
  }
  if(intro.width() == 750){
    introContent.css("marginTop","16.6rem");
  }
  introContent.css("top",video.height());
  introContent.css("display","block");
  // 支持按钮    
  var introSupport = $(".intro-support");
  if(intro.width() < 750){
    introSupport.css("marginTop","35%");   
  }
  if(intro.width() == 750){
    introSupport.css("marginTop","26.3rem");
  }
  introSupport.css("top",video.height());
  introSupport.css("left",(screenWidth - introSupport.width())/2);
  introSupport.css("display","block");
}



	
 