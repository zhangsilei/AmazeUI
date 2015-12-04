window.onload = function(){ 

  var tuijian = $('#tuijian'); 
  var quanbu = $('#quanbu');
  var renqi = $('#renqi');   
  var oldTabConts = [tuijian, quanbu, renqi];                   
  var paihang = $('#paihang');                           
  var tabTits = $('#tab').children('a');     // 所有标签链接   
  var count = 1;     // 逻辑分页
  var paihangList = paihang.find('ul');
  var quanbuList = quanbu.find('.paihang').find('ul');       
 
  // <iframe frameborder='0' src='http://v.qq.com/iframe/player.html?vid=e01719w6c3g&tiny=0&auto=0' allowfullscreen></iframe>
   
  // 标签内容中数据列表的html结构                      
  var tuijianData = "<div class='tuijian'><img src='imgs/index/poster1.png' class='am-img-responsive'/>" + 
    "<img src='imgs/index/shipin@2x.png' class='am-img-responsive'/>" +         
    "<div class='video'>" +
    "</div><img src='imgs/index/poster2.png' class='am-img-responsive'/>" +           
    "<span class='am-sans-serif'>探长来访</span><div class='intro'>" +    
    "<img src='imgs/index/mubiao-@2x.png' class='am-img-responsive'/><span class='am-sans-serif'>目标15000</span>" +
    "<img src='imgs/index/yichou@2x.png' class='am-img-responsive'/><span class='am-sans-serif'>已筹10000</span>" +   
    "<img src='imgs/index/shengyu@2x.png' class='am-img-responsive'/><span class='am-sans-serif'>剩余8天</span></div>" +       
    "<a href='item.html'><img src='imgs/index/zhichi-@2x.png' class='am-img-responsive'/></a></div>";
                               
  var quanbuData = "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left'style='background: #202020;'>" +
    "<div class='am-u-sm-4 am-u-md-2 am-list-thumb'><img src='imgs/paihang/tupian@2x.png' class='am-img-responsive paihang-poster'/></div>" +
    "<div class='am-u-sm-8 am-u-md-10 am-list-main' style='padding-left: 0rem;'><p class='paihang-title'>2015年周杰伦世界巡回演唱会-南京站</p>" + 
    "<img class='paihang-jiantou' src='imgs/paihang/xiayiji@2x.png'><div class='paihang-content'>" +           
    "<span class='am-sans-serif'>目标1500</span><span class='am-sans-serif'>已筹200</span><span class='am-sans-serif'>剩余8天</span></div>" +   
    "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'><img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +        
    "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'><img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +        
    "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'><a class='paihang-support' href='item.html'>立即支持</a></div></li>";   
       
  // var paihangData = "<li class='am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left'style='background: #202020;'>" +
  //   "<div class='am-u-sm-4 am-u-md-2 am-list-thumb' style='margin-top:-.5rem;'>" + 
  //   "<img src='imgs/paihang/tupian@2x.png' class='am-img-responsive paihang-poster'/></div>" + 
  //   "<div class='am-u-sm-8 am-u-md-10 am-list-main' style='padding-left: 0rem;'><p class='paihang-title'>2015年周杰伦世界巡回演唱会-南京站</p>" +  
  //   "<img class='paihang-jiantou' src='imgs/paihang/xiayiji@2x.png'><div class='paihang-content'>" +
  //   "<span class='am-sans-serif'>目标1500</span><span class='am-sans-serif'>已筹200</span><span class='am-sans-serif'>剩余8天</span></div>" +    
  //   "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'><img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +          
  //   "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'><img class='paihang-star' src='imgs/paihang/star-1@2x.png'>" +      
  //   "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'><a class='paihang-support am-sans-serif' href='item.html'>查看详情</a></div></li>";
     
  var renqiData = "<a href='renqi.html' class='renqi'><img src='imgs/renqi/yangyang@3x.png' class='am-img-responsive'>" +
      "<img src='imgs/renqi/dibumengban@3x.png' class='am-img-responsive renqi-mengban'>" + 
      "<span>阳阳</span><span>南京艺术学院</span><span>大一学生</span><button>支持她</button></a>"; 
 
  // 优化： 数据列表（类似“排行”）上外边距缩小一点     **************  
  //       考虑下什么时候用append，什么时候用display，完成此步骤后将append换成detach方法，提高效率      
  //       使用最新版的jquery，善用选择器。      **************      
  //       注意jquery对象的缓存       ***************         
  //       尽量使用ID选择器，因为它最快   *****************                      
  //       使用平滑过渡的字体                                     
  //       SEO优化!!!!!                                      
  //       数据列表用js控制跳转                                        
           
  tuijian.append(tuijianData);     // 首页加载时即显示“推荐”标签的所有信息
  initPage();     // 初始化首页的所有元素    

  // 首页顶部标签切换事件                            
  tabTits.each(function() {                            
    var _this = $(this);
    var title = _this.html();    
    var tab = null;                                                  
    _this.click(function() {  
      tabTits.css('color', '#fff');
      // 推荐页标签                                
      switch (title) {                                                       
        case '推荐':     // 推荐不需要通过new Tab来创建标签。因为上面首页加载时已经创建了节点，只要显示即可。  
          displayController([quanbu, renqi], tuijian);
          _this.css('color', '#1dbcd2');                                 
          break;                                                          
        case '全部众筹':                             
          displayController([tuijian, renqi], quanbu);        
          quanbu.find('.am-slider').flexslider();     // 初始化轮播图   
          tab = new Tab(_this, quanbuData + quanbuData + quanbuData);                              
          tab.initTabCont(quanbu.find('.paihang ul')); 
          // loadData(title, quanbuList);         
          break;            
        case '人气众筹':       
          displayController([tuijian, quanbu], renqi);    
          tab = new Tab(_this, renqiData + renqiData);          
          tab.initTabCont(renqi);                         
          break;   
      }    
      clickNewTabAction($(this).html());     // 不能直接用title，因为可能已经创建了新标签组，tabTits会改变         
    })                            
  })          
             
  // 左侧标签栏事件（排行榜、最新项目、完成项目这三个标签的点击）                                                   
  $("#left-nav a").click(function(){
    var leftTitle = $(this).children('span').html();    
    // 关闭侧边栏                               
    $("#leftside").offCanvas('close');       
    // 点击“首页”或“排行榜”                                            
    if (leftTitle == '首页' || leftTitle == '排行榜') {                   
      clickNewTabAction(leftTitle);                      
    }                                                     
  })                        
    
  var moreTitle = null;

  // 点击左侧标签“首页”和“排行榜”时，触发标签切换事件
  // 新标签组初始化成功后直接调用该方法即可切换标签      
  // @param {String} title 标签名                   
  function clickNewTabAction(title){ 
    switch(title) {                          
      case '首页':     // 显示原首页信息：推荐、全部众筹、人气众筹 
        var oldTabNames = ['推荐', '全部众筹', '人气众筹', '其他众筹'];          
        var i = 0, len = tabTits.length;   
        for( ; i < len; i++) {                   
          tabTits[i].style.color = '#fff';                  
        }                                                                   
        tabTits.each(function(i) {
          var _this = $(this);     
          if (i != 3) {           
            _this.html(oldTabNames[i]);       
            if (i == 0) {  
              _this.css('color', '#1dbcd2');       
            }     
          } else {     // 从新标签组换回旧标签组时，需要重新显示已隐藏的最后一个标签    
            _this.html(oldTabNames[i]).show();               
          }              
        })            
        if (paihang.is(':visible')) paihang.hide();           
        if (tuijian.is(':hidden')) tuijian.show();   
        break;                             
      case '排行榜':     // 显示新标签组信息：最新上线、金额最高、支持最多  
        displayController([tuijian, quanbu, renqi], paihang);  
        $('#more').show();                  
        var newTab = new NewTab(title, tabTits, oldTabConts); 
        loadData(null, paihangList);     // 首次加载不传title，默认“最新上线”
        tabTits.eq(0).css('color', '#1dbcd2');     // 默认新标签组的第一个标签为选中状态
        break;  
      case '最新上线' :
      case '金额最高' :
      case '支持最多' :  
        displayController([tuijian, quanbu, renqi], paihang);  
        count = 1;
        paihangList.empty();
        loadData(title, paihangList);
        break;
    }    
  }   

  /**
   * 数据列表加载
   * @param {String} title 标签名称
   * @param {Element} container 数据列表的外层容器 
   */
  function loadData(title, container) {
    var url = null;
    url = (title == null) ? '/project/last' : ''; 
    // 排行榜
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
    } 
    $.get(url, {page: count}, function(data) {
      if (data == null || (data != null && data.length == 0)) { 
        paihang.find('#more').children('a').html('没有更多');
      }
      for (i in data) {
        var stars = '';           
        for (var j = 0; j < data[i].star; j++) {
          stars += "<img class='paihang-star' src='imgs/paihang/star-1@2x.png'>";
        }
        for (var k = 0; k < (5 - data[i].star); k++) {
          stars += "<img class='paihang-star' src='imgs/paihang/star-2@2x.png'>"
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
    }); 
    count++;
  }    

  // 排行榜中的“加载更多”
  paihang.find('#more').click(function(){  
    loadData(moreTitle, paihangList);   
  })

  // 全部众筹中的分类数据加载
  quanbu.find('.kind').find('div').click(function(){ 
    loadData($(this).find('span').html(), quanbuList); 
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
    
}   
       
$(window).resize(function(){initPage();})               
 
// 页面初始化时，用JS来定位视频层的位置        
function initPage(){
  var poster = $(".tuijian > img:eq(0)"), videoDiv = $(".video"), video = $(".video iframe");  
  // 统一设置所有视频层的宽高和位置 
  videoDiv.css({
    'width': poster.width(), 
    'height': poster.height(),   
    'left': poster.css('marginLeft')    
  })   
  video.attr({      
    'width': '100%',   
    'height': '100%'    
  })   
  // 遍历推荐模块中所有的数据列表，以设置部分元素样式       
  $(".tuijian").each(function(index){   
    var curPoster = $(this).find("img").eq(0);
    var curPlay = $(this).find("img").eq(1); 
    var curVideoDiv = $(this).find(".video");           
    // 视频播放事件   
    curPlay.click(function(){         
      // 先隐藏不必要的元素        
      curPoster.css("visibility", "hidden");               
      curPlay.css("visibility", "hidden");              
      // 再显示视频层      
      curVideoDiv.show();             
    })    
  })
}           
    
/**     
 * 标签类    
 * @param {Element} tabTit 标签标题  
 * @param {Element} tabCont 标签内容 
 */   
var Tab = function(tabTit, tabCont){ 
  // 设置当前标签的颜色                     
  if(tabTit != null){             
    Tab.prototype.clickAction = function(){         
      tabTit.css('color', '#1dbcd2');                         
    }    
    this.clickAction();     // 初始化标签监听                              
  }       
  // 添加当前标签的数据              
  Tab.prototype.initTabCont = function(tabContContainer){                            
    if(tabContContainer.html() == ''){              
      tabContContainer.append(tabCont);          
    }            
  }     
}    
     
/**  
 * 新标签类（最新上线、金额最高、支持最多）         
 * @param {String} newTabName 新标签的名称    
 * @param {Elements} tabTits 标签组标题                  
 * @param {Elements} oldTabConts 旧标签组的内容      
 */
var NewTab = function(newTabName, tabTits, oldTabConts){ 
  // 清除旧标签组的标签内容              
  NewTab.prototype.clearOldTabs = function(){    
    if(oldTabConts[0].html() != ''){ 
      for(var i = 0; i < oldTabConts.length; i++){      
        oldTabConts[i].hide();     
      }        
    }              
  }    
  // 初始化新标签组的标题   
  NewTab.prototype.initNewTabTits = function(){     
    if(tabTits.eq(0).html() == '推荐'){     // 加个判断以保证只初始化一次                    
      tabTits.last().hide();              
      tabTits.eq(0).html('最新上线');                      
      tabTits.eq(1).html('金额最高');                                                 
      tabTits.eq(2).html('支持最多');                        
    }                        
  } 
  // 点击标题切换颜色  
  NewTab.prototype.clickAction = function(){        
    tabTits.each(function(){              
      $(this).css('color', ($(this).html() == newTabName) ? '#1dbcd2' : '#fff');
    })         
  }    
  // 初始化新标签组的内容             
  // @param {String} newTabCont 新标签的内容      
  // @param {Element} newContainer 新标签的父容器 
  NewTab.prototype.initNewTabConts = function(newTabCont, newContainer){  
    new Tab(null, newTabCont).initTabCont(newContainer);
  }
  // 自动初始化标签
  this.clearOldTabs();         
  this.initNewTabTits();        
  this.clickAction();  
}  
	
 