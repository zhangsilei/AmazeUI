window.onload = function(){
  initPage();     

  var imgurl = getQueryString('imgurl');
  var nickname = getQueryString('nickname');
  var rightLists = new Array();
  var rightNavLinks = $('.right-nav a');
  var ls = window.localStorage;  
  // 初始化右侧列表新节点       
  var myInfo = {       
    ele: rightNavLinks.eq(0),
    iconSrc: 'imgs/index/gerenziliao-@2x.png',    
    listName: '我的资料',   
    targetUrl: 'javascript:void(0)'              
  }      
  var myWallet = {    
    ele: rightNavLinks.eq(1),
    iconSrc: 'imgs/index/wodeqianbao-@2x.png',               
    listName: '我的钱包',      
    targetUrl: 'myWallet.html'    
  }  
  var myLove = {
    ele: rightNavLinks.eq(2),
    iconSrc: 'imgs/index/wodeshoucang-@2x.png',           
    listName: '我的收藏',   
    targetUrl: 'myLove.html'
  }
  var logout = {
    ele: rightNavLinks.eq(3),
    iconSrc: 'imgs/index/tuichudenglu-@2x.png',     
    listName: '退出登录',   
    targetUrl: '##'         
  }
  rightLists.push(myInfo, myWallet, myLove, logout);      
  // 判断用户登录状态   
  if(ls.getItem('status') != 'online'){                        
    var flag = getQueryString('flag');                        
    if(flag == 'success'){                  
      loginSucView(imgurl, decodeURI(nickname), rightLists);                   
      // 登录成功后将用户状态及用户信息保持在localStorage     
      if(ls){             
        var userStr = JSON.stringify(new User(decodeURI(nickname), null, null, imgurl));       
        ls.setItem('status', 'online');         
        ls.setItem('user', userStr);      
      }else{          
        console.log('浏览器不支持localStorage！');              
      }                
    }else if(flag == "fail"){    
      imgurl = null;                 
      nickname = null;      
      rightLists = null;           
      console.log("登录失败！flag=" + flag);                  
    }                      
  }else{                    
    var userStr = ls.getItem('user');       
    var userObj = JSON.parse(userStr);      
    loginSucView(userObj.imgurl, decodeURI(userObj.nickname), rightLists);                              
  }          

  // 我的资料事件
  if(rightNavLinks.first().children('span').html() == '我的资料'){  
    rightNavLinks.first().click(function(){  
      $.get('/my/userInfo', function(data){           
        var userStr = ls.getItem('user');
        var userObj = JSON.parse(userStr);       
        userObj.sex = data.sex;
        userObj.phoneNum = data.phone;       
        ls.setItem('user', JSON.stringify(userObj));    
        window.location.href = 'myInfo.html'; 
      })        
    })  
  }
 
  // 退出登录事件       
  if(rightNavLinks.last().children('span').html() == '退出登录'){
    rightNavLinks.last().click(function(){     
      ls.removeItem('status');        
      ls.removeItem('user');        
      window.location.href = "/user/Logout";           
    }) 
  }

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
}
  
// 浏览器窗口缩放时
$(window).resize(function(){   
  initPage();            
})    

/**
 * 页面初始化时，用JS来定位部分元素  
 */  
function initPage(){
  var poster = $(".tuijian > img:eq(0)");
  var videoDiv = $(".video");
  var video = $(".video video");
  var intro = $(".intro");  
  var support = $(".tuijian a img");    
  // 统一设置所有视频层的宽高和位置
  videoDiv.css('width', poster.width()).css('height', poster.height()).css('left', poster.css('marginLeft'));       
  // videoDiv.css("height", poster.height());
  // videoDiv.css("left", poster.css("marginLeft"));    
  video.attr('width', '100%').attr('height', '100%');  
  // video.attr("height", "100%");
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
    initPage();    
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
 * @param {String} nickname 用户昵称     
 * @param {Number} sex 性别  
 * @param {String} phoneNum 手机号
 * @param {String} imgPath 头像路径   
 */
 var User = function(nickname, sex, phoneNum, imgurl){         
  this.nickname = nickname;  
  this.sex = sex;  
  this.phoneNum = phoneNum;    
  this.imgurl = imgurl; 
}  
  
/**
 * 登录成功视图，登陆成功后改变右侧列表项并显示用户信息。  
 *（注：此处未重构右侧DOM结构，只是将原有的四个节点更换成新节点，剩下的新节点直接追加在后面）  
 * @param {String} imgurl 用户头像地址
 * @param {String} nickname 用户昵称      
 * @param {Elements} rightLists 新的列表节点集        
 */            
function loginSucView(imgurl, nickname, rightLists){     
  var userHeader = $(".user-header");    
  var userTitle = $(".user-title");   
  // 刷新右侧列表       
  userHeader.attr('src', imgurl);       
  userTitle.html(nickname);     
  for(list in rightLists){            
    var temp = rightLists[list].ele;
    temp.children('img').attr('src', rightLists[list].iconSrc);  
    temp.children('span').html(rightLists[list].listName);
    temp.attr('href', rightLists[list].targetUrl);
  }
  // 插入“我的订单”节点   
  $(".right-nav li").last().before(      
    "<li><a href='##'>" +  
    "<img src='imgs/index/wodedingdan@2x.png'> " +         
    "<span>我的订单</span>" +   
    "</a></li>"    
  );
  // 插入“分享有礼”节点      
  $(".right-nav li").last().before(     
    "<li><a href='share.html'>" +
    "<img src='imgs/index/fenxiangyouli-@2x.png'> " +       
    "<span>分享有礼</span>" +     
    "</a></li>"   
  );      
}

    
    


	
 