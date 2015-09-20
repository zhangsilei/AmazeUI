window.onload =function(){
  setEleLocation();
  loginSucView("result");

  // 顶部tab标签切换
  $(".top > a").click(function(){
    changeTabName($(this));
    changeTabContent($(this).html());
  })

  // 左侧快捷进入tab 
  $(".left-nav a").click(function(){
    // 关闭侧边栏
    $("#leftside").offCanvas('close');
    // 显示点击的tab
    var tab = $(this).children("span");
    var tabs = $(".top > a");
    if(tab.html() == "推荐项目"){     // 推荐项目   
      changeTabName(tabs.eq(0));   
      changeTabContent("推荐");   
    }else if(tab.html() == "排行榜"){     // 排行榜    
      changeTabName(tabs.eq(1));
      changeTabContent("排行");
    }else if(tab.html() == "最新项目"){     // 最新项目
      changeTabName(tabs.eq(2));
      changeTabContent("最新");
    }else if(tab.html() == "完成项目"){     // 完成项目   
      changeTabName(tabs.eq(3));
      changeTabContent("完成");     
    }
  })
}

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

/**
 * Tab选项卡名称切换
 * {Element} 选项卡名称节点
 */
function changeTabName(ele){
  // tab选中状态切换
  var current = $(".top-a-current");
  // 移除先前选中tab标签样式
  current.removeClass("top-a-current");
  current.css("color","#C7C7C7");
  // 将当前选中tab标签增加样式
  ele.addClass("top-a-current");
  ele.css("color","#2BC0D4");
}

/**
 * Tab选项卡内容切换
 * @param  {string} tabName 标签名称
 */
function changeTabContent(tabEle){
  var tuijian = $(".tuijian");
  var paihang = $(".paihang");
  var zuixin = $(".zuixin");
  var success = $(".success");
  if(tabEle == "推荐"){     // 推荐tab
    /*$(".tuijian .main").remove();     // 移除所有推荐项目
    $(".paihang ul").empty();     // 移除所有项目排行内容   
    $(".zuixin .zuixin-item").empty();     // 移除所有最新项目内容 
    $(".success ul").empty();     // 移除所有成功项目内容*/
    // 隐藏其它内容
    paihang.css("display","none");   
    zuixin.css("display","none");   
    success.css("display","none");
    // 点击tab标签显示当前相应内容
    (tuijian.css("display") == "none") ? tuijian.css("display","block") : null;
    if($(".main").html() == "" || $(".main").html() == null){
      tuijian.append(
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
      setEleLocation();
    }
  }else if(tabEle == "排行"){     // 排行tab  
    // 隐藏其它内容而不是删除节点
    tuijian.css("display","none");     
    zuixin.css("display","none");        
    success.css("display","none");   
    // 显示当前内容
    (paihang.css("display") == "none") ? paihang.css("display","block") : null;    
    if($(".paihang ul").html() == "" || $(".paihang ul").html() == null){
      paihang.css("display","block");
      $(".paihang ul").append(
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
        "<a class='paihang-support' href='item.html'>立即支持</a>" +
        "<img class='paihang-jiantou' src='images/paihang/xiangqing.png'></div></li>"
      );   
    }
  }else if(tabEle == "最新"){     // 最新tab
    // 隐藏其它内容
    tuijian.css("display","none");   
    paihang.css("display","none");   
    success.css("display","none");
    // 显示当前内容 
    (zuixin.css("display") == "none") ? zuixin.css("display","block") : null;
    if($(".zuixin .zuixin-item").html() == "" || $(".zuixin .zuixin-item").html() == null){
      $(".zuixin .zuixin-item").append(
        "<img class='am-img-responsive zuixin-img' src='images/index/tupian-1.png'>" +
        "<div class='zuixin-content'>" +
        "<span class='zuixin-title' style='font-size: 1.6rem;margin-right: 0rem;'>某某某音乐会</span>" +
        "<span>2015-8-17</span><span>13:00</span><span>剩余12天</span><span>49人浏览</span>" +
        "<a class='zuixin-support' href='item.html'>立即支持</a></div>"    
      );     
    }
  }else if(tabEle == "完成"){     // 完成tab
    // 隐藏其它内容
    tuijian.css("display","none");   
    paihang.css("display","none");   
    zuixin.css("display","none");
    // 显示当前内容
    (success.css("display") == "none") ? success.css("display","block") : null;
    if($(".success ul").html() == "" || $(".success ul").html() == null){
      $(".success ul").append(
        "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left' style='background:#333;'>" +
        "<div class='am-u-sm-4 am-list-thumb'>" +
        "<img src='images/index/img1.png' class='am-img-responsive success-img'/></div>" +
        "<div class='am-u-sm-8 am-list-main'>" +
        "<p class='success-title'>某某某演唱会</p>" +
        "<div class='success-content'>" +
        "<span>目标: 1500</span><span>已筹: 200</span><span>剩余: 8天</span>" +
        "<span>时间: 6天</span><span>用时: 4天</span></div>" +        
        "<img class='success-icon' src='images/introduce/chenggong.png'>" +           
        "<span class='success-ok'>已完成</span>" +         
        "<img class='success-jiantou' src='images/paihang/xiangqing.png'></div></li>"    
      );
    }
  }
}

/**
 * 登陆成功时，操作DOM改变右边栏内容
 * @param  {string} name 登陆成功返回的标记
 */
function loginSucView(name){
  var result = GetQueryString(name);
  if(result != null && result != ""){
    if(result == "success"){
      $("#rightside .user-header").attr("src","images/introduce/touxiang.png");
      $("#rightside .user-name").html("我叫小姜姜");
      // 我的资料
      var myInfo = $(".right-nav a:eq(0)");
      change(myInfo,"images/personal/gerenziliao.png","我的资料");
      myInfo.attr("href","myInfo.html");
      // 我的钱包
      var myWallet = $(".right-nav a:eq(1)");
      change(myWallet,"images/personal/zhongchoujilu.png","我的钱包");
      myWallet.attr("href","myWallet.html");
      // 我的收藏
      var myLove = $(".right-nav a:eq(2)");
      change(myLove,"images/personal/zhongchoujilu.png","我的收藏");
      myLove.attr("href","myLove.html");
      // 插入“我的订单”节点
      $(".right-nav li:eq(2)").after(
        "<li><a href='##'>" +
        "<img src='images/personal/zhongchoujilu.png'> " +  
        "<span>我的订单</span>" +
        "</a></li>"
      );
      // 插入“分享有礼”节点
      $(".right-nav li:eq(3)").after(
        "<li><a href='share.html'>" +
        "<img src='images/personal/zhongchoujilu.png'> " +  
        "<span>分享有礼</span>" +
        "</a></li>"
      );
      // 退出登录
      var logout = $(".right-nav a:eq(5)");  
      change(logout,"images/personal/zhongchoujilu.png","退出登录");
      logout.attr("href","##");    
    }else{
      // 登陆失败
    }
    function change(ele, src, str){
      ele.children("img").attr("src",src);
      ele.children("span").html(str);
    }
  }
}


	
 