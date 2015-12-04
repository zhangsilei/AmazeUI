function loading(){
  $('.help').hide();
  $('#content').show();
  // 播放按钮、介绍（含支持按钮）在页面加载完后显示
  var plays = $('.play').fadeIn(100);
  var intros = $('.intro').fadeIn(100);
}

$(function(){

  var tuijian = $('#tuijian'); 
  var quanbu = $('#quanbu');
  var renqi = $('#renqi');   
  var oldTabConts = [tuijian, quanbu, renqi];                   
  var paihang = $('#paihang');                           
  var tabTits = $('#tab').children('a');     // 所有标签链接   
  var listPage = 1;     // 数据列表分页
  var paihangList = paihang.find('ul');
  var quanbuList = quanbu.find('.paihang').find('ul'); 
  var moreTitle = '';      
  var recPage = 1;     // 推荐内容分页
  var lastTime = 0;     // 数据列表中的最新时间
 
  var renqiData = "<a href='renqi.html' class='renqi'><img src='imgs/renqi/yangyang@3x.png' class='am-img-responsive'>" +
      "<img src='imgs/renqi/dibumengban@3x.png' class='am-img-responsive renqi-mengban'>" + 
      "<span>阳阳</span><span>南京艺术学院</span><span>大一学生</span><button>支持她</button></a>"; 
 
  // 初始化“推荐”标签
  $.get('/project/recommend', {page: recPage}, function(data){
    for (i in data) {
      tuijian.append(
        "<div class='tuijian'><img src='imgs/index/poster1.png' class='am-img-responsive'/>" + 
        "<img src='imgs/index/shipin@2x.png' class='play'/>" +         
        "<div class='video'></div>" +
        "<a href='item.html'><img src='imgs/index/poster2.png' class='am-img-responsive'/>" +           
        "<div class='intro'>" +    
        "<img src='imgs/index/mubiao-@2x.png'/><span class='am-sans-serif'>目标"+ data[i].totalSupportCount +"</span>" +
        "<img src='imgs/index/yichou@2x.png'/><span class='am-sans-serif'>已筹"+ data[i].successSupportCount +"</span>" +   
        "<img src='imgs/index/shengyu@2x.png'/><span class='am-sans-serif'>剩余"+ data[i].restDays +"天</span></div>" +       
        "<img src='imgs/index/zhichi-@2x.png'/></div></a>"
      ); 
      setVideoLocation();     // 设置视频层的位置和宽高
      $(".tuijian").eq(i).each(function(index){     // 遍历推荐数据列表，添加播放视频监听   
        var curPoster = $(this).find("img").eq(0), curPlay = $(this).find("img").eq(1), curVideoDiv = $(this).find(".video");           
        curPlay.click(function(){     // 视频播放事件         
          // 先隐藏不必要的元素        
          curPoster.css("visibility", "hidden");               
          curPlay.css("visibility", "hidden");              
          // 再显示视频层      
          curVideoDiv.show();             
        })    
      })
    }
  })
  setVideoLocation();

  tabTits.click(function(){
    // 标签颜色切换
    changeTabColor(tabTits, $(this));
    // 标签内容切换
    switch ($(this).html()) {
      case '推荐':
        displayController([quanbu, renqi], tuijian);
        break;
      case '全部众筹':
        quanbu.find('.am-slider').flexslider();     // 初始化轮播图 
        quanbu.find('.more').show();     // 显示更多 
        moreTitle = $(this).html();     // 默认调用“全部众筹”接口
        if(quanbuList.html() == ''){
          listPage = 1;
          loadDataList($(this).html(), quanbuList);     
        } 
        displayController([tuijian, renqi], quanbu);
        break;
      case '人气众筹':
        if(renqi.html() == ''){ 
          renqi.append(renqiData+renqiData+renqiData);
        }
        displayController([tuijian, quanbu], renqi);
        break;
      case '最新上线':
      case '金额最高':
      case '支持最多':
        paihangList.fadeOut(200).empty();   
        paihang.find('.more').children('a').html('点击查看更多 &raquo;'); 
        listPage = 1, moreTitle = $(this).html(); 
        loadDataList($(this).html(), paihangList);
        paihangList.fadeIn(200);      
        break;
    }
  })
             
  // 左侧标签栏事件（排行榜、最新项目、完成项目这三个标签的点击）                                                   
  $("#left-nav a").click(function(){
    var leftTitle = $(this).children('span').html();    
    // 关闭侧边栏                               
    $("#leftside").offCanvas('close');       
    // 点击“首页”或“排行榜”                                            
    if (leftTitle == '首页') {   
      // 更换标签组           
      tabTits.last().show();
      tabTits.eq(0).html('推荐');
      tabTits.eq(1).html('全部众筹'); 
      tabTits.eq(2).html('人气众筹'); 
      // 设置默认标签颜色
      changeTabColor(tabTits, tabTits.eq(0));  
      // 直接显示“推荐”数据即可。（加载页面时已经初始化） 
      displayController([quanbu, renqi, paihang], tuijian);
    }                                  
    if (leftTitle == '排行榜') {
      // 更换标签组
      tabTits.last().hide();
      tabTits.eq(0).html('最新上线'); 
      tabTits.eq(1).html('金额最高');
      tabTits.eq(2).html('支持最多'); 
      // 设置默认标签颜色
      changeTabColor(tabTits, tabTits.eq(0));
      // 默认加载“最新上线”数据
      if(paihangList.html() == ''){
        listPage = 1;
        loadDataList('最新上线', paihangList);     
      }
      paihang.find('.more').show();     // 显示更多
      moreTitle = '最新上线';     // 默认调用“最新上线”接口
      displayController([tuijian, quanbu, renqi], paihang);
    }                   
  })                       

  /**
   * 数据列表加载（排行榜、全部众筹中的列表数据） 
   * @param {String} title 标签名称 
   * @param {Element} container 数据列表的外层容器  
   */
  function loadDataList(title, container) {
    var url = '';
    switch (title) { 
      case '最新上线':
        url = '/project/last';
        break; 
      case '金额最高':
        url = '/project/highest';
        break;
      case '支持最多': 
        url = '/project/rank'; 
        break;  
      case '全部众筹': 
        url = '/project/allPro'; 
        break;
      case '':
        url = '';
        break; 
    }  
    var beginTime = 1449209215000;
    console.log(typeof beginTime);
    $.get(url, {page: listPage, beginTime: beginTime}, function(data) {  
      if (data == null || (data != null && data.length == 0)) { 
        if (title == '最新上线' || title == '金额最高' || title == '支持最多') {
          paihang.find('.more').children('a').html('没有更多'); 
        } else if (title === '全部众筹') { 
          quanbu.find('.more').children('a').html('没有更多');
        }
      }    
      for (i in data) {
        var stars = '';
        var j = k = 0;
        var len = data[i].star;           
        for ( ; j < len; j++) {  
          stars += "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>";
        }
        for ( ; k < (5 - len); k++) {
          stars += "<img class='paihang-star' src='imgs/paihang/star-2@2x.png'>";
        }
        container.append(
          "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left'style='background:#202020;'>" +
          "<div class='am-u-sm-4 am-u-md-2 am-list-thumb' style='margin-top:-.5rem;'>" + 
          "<img src='"+ data[i].image +"' class='am-img-responsive paihang-poster'/></div>" +  
          "<div class='am-u-sm-8 am-u-md-10 am-list-main' style='padding-left:0rem;'>" + 
          "<p class='paihang-title'>"+ data[i].name +"</p>" +
          "<img class='paihang-jiantou' src='imgs/paihang/xiayiji@2x.png'><div class='paihang-content'>" +
          "<span class='am-sans-serif'>目标"+ data[i].totalSupportCount +"</span>" +
          "<span class='am-sans-serif'>已筹"+ data[i].successSupportCount +"</span>" + 
          "<span class='am-sans-serif'>剩余"+ data[i].restDays +"天</span></div>" +
          stars +"<a class='paihang-support am-sans-serif' href='item.html'>查看详情</a></div></li>"
        );    
      } 
      lastTime = data[data.length-1].beginTime;
    }); 
    listPage++;
  }     

  // 排行榜中的“加载更多”事件
  paihang.find('.more').click(function(){ 
    loadDataList(moreTitle, paihangList);   
  })

  // 全部众筹中的“加载更多”事件
  quanbu.find('.more').click(function(){ 
    loadDataList(moreTitle, quanbuList);   
  })

  // 全部众筹中的分类数据加载
  quanbu.find('.kind').find('div').click(function(){ 
    loadDataList($(this).find('span').html(), quanbuList); 
  })
   
  // 用户登录               
  var rightNavLinks = $('#right-nav').find('a');                 
  var ls = window.localStorage;                    
  var rightLists = initRightLists(rightNavLinks);                                                   
  var newLists = initNewLists();          
  var imgurl = ls.getItem('imgurl');    
  var nickname = ls.getItem('nickname');     
  var userId = ls.getItem('userId');    
  var ua = navigator.userAgent.toLowerCase();     // 获取userAgent

  // 判断用户登录状态
  if(ls){     // 判断浏览器是否支持localStroage
    if(ls.getItem('status') != 'online'){     // 未登录用户 
      if (ua.match(/MicroMessenger/i) == "micromessenger") {     //在微信中打开

        window.location.href = '/user/WechatWebLogin';

        // $.get('/user/WechatWebLogin', function(data){
        //   ls.setItem('flag', data.flag);             
        //   ls.setItem('userId', data.userId); 
        //   ls.setItem('nickname', data.nickname);     
        //   ls.setItem('imgurl', data.imgurl);
        //   loginSucView(data.imgurl, decodeURI(data.nickname), rightLists, newLists);     
        // }) 
      }else{    
        var flag = ls.getItem('flag');                   
        if(flag == 'success'){     // 三方登录成功                                               
          loginSucView(imgurl, decodeURI(nickname), rightLists, newLists);          
          if(ls){                              
            var userStr = JSON.stringify(new User(userId, decodeURI(nickname), null, null, imgurl, null));       
            ls.setItem('status', 'online');                      
            ls.setItem('user', userStr);                         
          }                                     
        }else if(flag == "fail"){     // 三方登录失败                                              
          imgurl = null;                                           
          nickname = null;                                               
          rightLists = null;                                        
          console.log("登录失败！flag=" + flag);                                                                         
        }    
      }
    }else{     // 已登录用户直接显示用户信息
      var userObj = JSON.parse(ls.getItem('user'));                   
      loginSucView(userObj.imgurl, decodeURI(userObj.nickname), rightLists, newLists);                      
    }  
  }else {
    console.log('浏览器不支持localStroage！');
  }                          
                                    
                      
  // 我的资料事件                
  if(rightNavLinks.first().children('span').html() == '我的资料'){
    rightNavLinks.first().click(function(){                          
      window.location.href = 'myInfo.html?from=index';                                            
    })                     
  }           
    
  // 退出登录事件             
  if(trim(rightNavLinks.last().children('span').html()) == '退出登录'){
    rightNavLinks.last().click(function(){  
      ls.removeItem('status');                            
      ls.removeItem('user');      
      // 删除三方登录的信息 
      ls.removeItem('flag'); 
      ls.removeItem('userId');        
      ls.removeItem('nickname');       
      ls.removeItem('imgurl'); 
      // 删除未释放的草稿信息  
      if(ls.getItem('newNickname') != null){     
        ls.removeItem('newNickname');   
      }
      if(ls.getItem('newphoneNum') != null){ 
        ls.removeItem('newphoneNum');
      }   
      if(ls.getItem('newemail') != null){     
        ls.removeItem('newemail');      
      }  
      window.location.href = "/user/Logout";                       
    })      
  }         
    
})   
       
$(window).resize(function(){initPage();})               
 
// 设置视频层的位置和宽高       
function setVideoLocation(){
  // 统一设置所有视频层的宽高和位置 
  var poster = $(".tuijian > img:eq(0)"), videoDiv = $(".video"), video = $(".video iframe");  
  videoDiv.css({
    'width': poster.width(), 
    'height': poster.height(),   
    'left': poster.css('marginLeft')    
  })   
  video.attr({       
    'width': '100%',   
    'height': '100%'    
  })   
}    

/**
 * 切换标签的颜色
 * @param {Elements} tabs 所有标签
 * @param {Element} activeTab 需要激活显示的标签
 */
function changeTabColor(tabs, activeTab) {
  tabs.css({
    'color': '#fff',
    'borderRadius': 'none',
    'background': '#202020'
  });
  activeTab.css({
    'color': '#1dbcd2',
    'borderRadius': '2rem',
    'background': '#000'
  });
}        
    
 