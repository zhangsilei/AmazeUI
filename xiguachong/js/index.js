window.onload = function(){
  loginSucView("result");      

  // 顶部选项卡切换 
  var tabs = $(".tab a");
  $(".tab > a").click(function(){
    changeTab(tabs, $(this));
  })  
    
  // 左侧快捷入口进入选项卡    
  $(".left-nav a").click(function(){      
    // 关闭侧边栏      
    $("#leftside").offCanvas('close');
    // 显示点击的选项卡    
    var tab = $(this).children("span");
    if(tab.html() == "推荐项目"){     // 推荐项目  
      changeTab(tabs, $(".tab > a:contains('推荐')"));    
    }else if(tab.html() == "排行榜"){     // 排行榜    
      changeTab(tabs, $(".tab > a:contains('排行')"));      
    }else if(tab.html() == "最新项目"){     // 最新项目
      changeTab(tabs, $(".tab > a:contains('最新')"));
    }else if(tab.html() == "完成项目"){     // 完成项目   
      changeTab(tabs, $(".tab > a:contains('完成')"));
    }
  })

  setEleLocation();     // 定位部分元素位置
}

// 浏览器窗口缩放时
$(window).resize(function(){
  setEleLocation();     
})

/**
 * 部分元素的样式用js来hack
 */  
function setEleLocation(){
  var poster = $(".tuijian > img:eq(0)");
  var videoDiv = $(".video");
  var video = $(".video video");
  var intro = $(".intro");
  var support = $(".tuijian a img");
  // 统一设置所有视频层的宽高和位置
  videoDiv.css("width", poster.width());       
  videoDiv.css("height", poster.height());
  videoDiv.css("left", poster.css("marginLeft"));    
  video.attr("width", "100%");
  video.attr("height", "100%");
  // 统一设置所有支持按钮的位置
  support.css("top", poster.height());
  // 遍历所有推荐模块来改变每个模块中相应的部分元素样式    
  $(".tuijian").each(function(index){  
    var curPoster = $(this).find("img").eq(0);   
    var curZhezhao = $(this).find("img").eq(1);
    var curPlay = $(this).find("img").eq(2);  
    var curVideoDiv = $(this).find(".video");
    var picZhezhao = $(this).find("img").eq(4);     
    var introTitle = $(this).find("span").eq(0);  
    // 设置每个播放按钮的位置
    curPlay.css("top", (curPoster.height() - curPlay.height()) / 2).css("display", "block");  
    // 设置每个图片蒙版的位置
    picZhezhao.css("top", curPoster.height()).css("display", "block"); 
    // 设置每个概况标题的位置
    introTitle.css("top", curPoster.height()).css("display", "block");        
    // 设置每个概况内容的位置
    intro.css("top", parseInt(introTitle.css("top")) + introTitle.height() + parseInt(introTitle.css("marginTop"))).css("display", "block"); 
    // 设置每个支持按钮的位置
    support.css("top", parseInt(intro.css("top")) + intro.height() + parseInt(intro.css("marginTop"))).css("display", "block");
    // 视频播放事件  
    curPlay.click(function(){ 
      // 先隐藏不必要的元素   
      curPoster.css("visibility", "hidden");            
      curZhezhao.css("visibility", "hidden");     
      curPlay.css("visibility", "hidden");   
      // 再显示视频层
      curVideoDiv.css("display", "block");    
    })  
  })  
}

/**
 * 选项卡切换
 * @param  {ElementList} tabs 所有选项卡
 * @param  {Element} currentTab 当前选中的选项卡 
 */
function changeTab(tabs, currentTab){

  /***** 切换Tab标题 *****/
  tabs.each(function(index){
    $(this).css("color", "#fff");         
  })
  currentTab.css("color", "#1dbcd2");    

  /***** 切换Tab内容 *****/
  var tuijian = $(".tuijian");   
  var paihang = $(".paihang");    
  var zuixin = $(".zuixin");
  var success = $(".success");   
  if(currentTab.html() == "推荐"){     // 推荐Tab 

    // 隐藏其它内容
    paihang.css("display","none");   
    zuixin.css("display","none");   
    success.css("display","none");

    // 点击Tab标签显示当前相应内容
    (tuijian.css("display") == "none") ? tuijian.css("display","block") : null;
    if($(".tuijian").html() == "" || $(".tuijian").html() == null){   
      tuijian.append(      
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
        "<img src='images/index/support.png' class='am-img-responsive intro-support'/>"
      );
    }
    setEleLocation();    
  }else if(currentTab.html() == "排行"){     // 排行Tab  

    // 隐藏其它内容而不是删除节点
    tuijian.css("display","none");     
    zuixin.css("display","none");        
    success.css("display","none");  

    // 显示当前内容
    (paihang.css("display") == "none") ? paihang.css("display","block") : null;    
    if($(".paihang ul").html() == "" || $(".paihang ul").html() == null){   
      paihang.css("display","block");       
      $(".paihang ul").append(
        "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left'style='background: #202020;'>" +
        "<div class='am-u-sm-4 am-list-thumb'>" +
        "<img src='imgs/paihang/tupian@2x.png' class='am-img-responsive paihang-poster'/></div>" +
        "<div class='am-u-sm-8 am-list-main'>" +
        "<p class='paihang-title'>2015年周杰伦世界巡回演唱会-南京站</p>" +
        "<img class='paihang-jiantou' src='imgs/paihang/xiayiji@2x.png'>" +   
        "<div class='paihang-content'>" + 
        "<span>目标1500</span>" +      
        "<span>已筹200</span>" +        
        "<span>剩余8天</span></div>" +   
        "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +         
        "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +      
        "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +     
        "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +
        "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +
        "<a class='paihang-support' href='item.html'>立即支持</a>" +
        "</div></li>"
      );
      // Hack一下箭头的位置
      browserType("UCBrowser") ? $(".paihang-jiantou").css("top", "1.2rem") : null;
    }
  }else if(currentTab.html() == "最新"){     // 最新Tab

    // 隐藏其它内容
    tuijian.css("display","none");   
    paihang.css("display","none");   
    success.css("display","none");

    // 显示当前内容 
    (zuixin.css("display") == "none") ? zuixin.css("display","block") : null;
    if($(".zuixin .zuixin-list").html() == "" || $(".zuixin .zuixin-list").html() == null){
      $(".zuixin .zuixin-list").append(    
        "<img class='am-img-responsive zuixin-poster' src='imgs/zuixin/tupian-1.png'>" +
        "<div class='zuixin-content'>" +
        "<span class='zuixin-title' style='font-size:1.8rem; margin-right:0rem; color:#ccc;'>薛之谦音乐会</span>" +
        "<span>2015-8-17</span><span>13:00</span><span>剩余12天</span><span>49人浏览</span>" +
        "<a class='zuixin-support' href='item.html'>立即支持</a></div>"    
      );     
    }
  }else if(currentTab.html() == "完成"){     // 完成Tab

    // 隐藏其它内容   
    tuijian.css("display","none"); 
    paihang.css("display","none");   
    zuixin.css("display","none");

    // 显示当前内容
    (success.css("display") == "none") ? success.css("display","block") : null;
    if($(".success ul").html() == "" || $(".success ul").html() == null){
      $(".success ul").append(
        "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left' style='background:#202020;'>" +
        "<div class='am-u-sm-4 am-list-thumb'>" +
        "<img src='imgs/wancheng/tupian@2x.png' class='am-img-responsive success-poster'/></div>" +
        "<div class='am-u-sm-8 am-list-main'>" +  
        "<p class='success-title'>薛之谦演唱会</p>" +
        "<div class='success-content'>" +
        "<span>目标: 1500</span><span>已筹: 200</span>" +   
        "<span>时间: 6天</span><span>用时: 4天</span></div>" +           
        "<img class='success-icon' src='imgs/wancheng/chenggong.png'>" +              
        "<span class='success-ok'>已完成</span>" +         
        "<img class='success-jiantou' src='imgs/wancheng/xiayiji@2x.png'></div></li>"    
      );
      // Hack一下箭头的位置   
      browserType("UCBrowser") ? $(".success-jiantou").css("top", "1.2rem") : null;  
    } 
  }
}

/**
 * 登陆成功时，操作DOM改变右边栏内容   
 * @param {string} name 登陆成功返回的标记    
 */
function loginSucView(name){
  var result = getQueryString(name);
  if(result != null && result != ""){  
    if(result == "success"){
      $("#rightside .user-header").attr("src","imgs/index/touxiang@2x.png");
      $("#rightside .user-title").html("我叫小姜姜");
      // 我的资料
      var myInfo = $(".right-nav a:eq(0)");   
      change(myInfo,"imgs/index/gerenziliao-@2x.png","我的资料");   
      myInfo.attr("href","myInfo.html");
      // 我的钱包   
      var myWallet = $(".right-nav a:eq(1)");
      change(myWallet,"imgs/index/wodeqianbao-@2x.png","我的钱包");      
      myWallet.attr("href","myWallet.html");
      // 我的收藏       
      var myLove = $(".right-nav a:eq(2)");
      change(myLove,"imgs/index/wodeshoucang-@2x.png","我的收藏");
      myLove.attr("href","myLove.html");   
      // 插入“我的订单”节点
      $(".right-nav li:eq(2)").after(
        "<li><a href='##'>" +
        "<img src='imgs/index/wodedingdan@2x.png'> " +  
        "<span>我的订单</span>" +
        "</a></li>"
      );
      // 插入“分享有礼”节点
      $(".right-nav li:eq(3)").after(
        "<li><a href='share.html'>" +
        "<img src='imgs/index/fenxiangyouli-@2x.png'> " +  
        "<span>分享有礼</span>" +
        "</a></li>"
      );
      // 退出登录
      var logout = $(".right-nav a:eq(5)");  
      change(logout,"imgs/index/tuichudenglu-@2x.png","退出登录");
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


	
 