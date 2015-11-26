/**
 * 隐藏与显示
 * @param {Elements}/{Element} hideEles 要隐藏的元素
 * @param {Elements}/{Element} showEles 要显示的元素
 */ 
function displayController(hideEles, showEles) {
  try{
    if (hideEles.length > 1) {
      for (i in hideEles) {    
        hideEles[i].hide();      
      }  
    }else {   
      hideEles.hide();             
    }    
    if (showEles.length > 1) {
      for (i in showEles) {
        showEles[i].show();    
      }    
    }else {        
      showEles.show(); 
    }     
  }catch(e){ 
    console.log('参数不能为null');
  }
     
}

/**
 * 提示信息显示与隐藏
 * @param {Element} tip 提示信息的节点
 * @param {Function} Fuc 提示信息执行函数，直接传函数名即可，无需带参数。
 * @param {String} msg 提示信息   
 */     
function tipShowHide(tip, Fuc, msg){
  tip.css('display', 'block');                
  Fuc(tip, msg);              
  setTimeout(function(){ 
    tip.css('display', 'none');                
  }, 2000);      
}
      
/**     
 * @param {int} userId 用户ID 
 * @param {String} nickname 用户昵称       
 * @param {Number} sex 性别       
 * @param {String} phoneNum 手机号                 
 * @param {String} imgPath 头像路径   
 * @param {String} email 用户邮箱  
 */    
var User = function(userId, nickname, sex, phoneNum, imgurl, email){        
  this.userId = userId;                 
  this.nickname = nickname;             
  this.sex = sex;               
  this.phoneNum = phoneNum;                 
  this.imgurl = imgurl;           
  this.email = email; 
}       
  
/**
 * 登录成功视图，登陆成功后改变右侧列表项并显示用户信息。  
 *（注：此处未重构右侧DOM结构，只是将原有的四个节点更换成新节点，剩下的新节点直接追加在后面）  
 * @param {String} imgurl 用户头像地址
 * @param {String} nickname 用户昵称       
 * @param {Elements} rightLists 代替原列表节点的新节点集  
 * @param {Elements} newLists 新增的列表节点集       
 */              
function loginSucView(imgurl, nickname, rightLists, newLists){      
  var userHeader = $(".user-header"), userTitle = $(".user-title");                     
  // 刷新右侧列表 
  // 头像、昵称                
  userHeader.attr('src', imgurl);                          
  userTitle.html(nickname);         
  // 替换旧列表项 
  for(list in rightLists){                       
    var temp = rightLists[list].ele;      
    temp.children('img').attr('src', rightLists[list].iconSrc);              
    temp.children('span').html(rightLists[list].listName);               
    temp.attr('href', rightLists[list].targetUrl);            
  }               
  // 追加新列表项
  for(list in newLists){ 
    var temp = newLists[list];   
    $('.right-nav li').last().before(         
      '<li><a href="' + temp.targetUrl + '">' +               
      '<img src="' + temp.iconSrc + '">' +      
      '<span>' + temp.listName + '</span>' + 
      '</a></li>'  
    ); 
  } 
}  

/** 
 * 初始化所有要代替原列表节点的新节点集 
 * @param {Elements} rightNavLinks 原右侧列表节点  
 * @return {Elements} 代替原列表节点的新节点集                  
 */ 
function initRightLists(rightNavLinks){                
  var rightLists = new Array();                     
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
    listName: ' 退出登录',           
    targetUrl: '##'                                    
  }             
  rightLists.push(myInfo, myWallet, myLove, logout);                      
  return rightLists;     
} 
 
/**
 * 初始化新增的节点集      
 * @return 新增的节点集  
 */    
function initNewLists(){
  var newLists = new Array();      
  var myOrder = {
    iconSrc: 'imgs/index/wodedingdan@2x.png',
    listName: ' 我的订单',         
    targetUrl: '##'      
  }     
  var share = {  
    iconSrc: 'imgs/index/fenxiangyouli-@2x.png',  
    listName: ' 分享有礼',
    targetUrl: 'share.html'         
  }   
  newLists.push(myOrder, share);
  return newLists;      
}                
 
/**  
 * 前台合法性错误提示     
 * @param {Element} tipEle 显示警告信息的节点                     
 * @param {String} warInfo 警告信息                   
 */           
function warning(tipEle, warInfo){     
  tipEle.addClass('am-alert am-alert-warning').css('margin', 0).alert().html(warInfo);           
}  
                 
/**       
 * 后台逻辑性错误提示       
 * @param {Element} tipEle 显示错误信息的节点           
 * @param {String} errInfo 错误信息      
 */     
function error(tipEle, errInfo){      
  tipEle.addClass('am-alert am-alert-danger').css('margin', 0).alert().html(errInfo);       
}    

/*******************************************   
 *
 * 基于原生JS的工具类       
 *  
 ******************************************/
/**    
 * 判断终端类型         
 */                     
var browser={   
  versions:function(){      
      var u = navigator.userAgent;         
      return {     
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核  
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核    
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核   
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
      };     
  }(),  
  language:(navigator.browserLanguage || navigator.language).toLowerCase()          
};

/**
 * 获取请求url的参数
 * @param {String} name URL后缀的参数名
 */      
function getQueryString(name){       
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
  var r = window.location.search.substr(1).match(reg); 
  if(r!=null)return  unescape(r[2]); return null; 
}
    
/**   
 * 检测浏览器类型
 * @param {String} browserStr 浏览器标志字符串    
 * @return {boolean}      
 */    
function browserType(browserStr){      
  return (navigator.userAgent.indexOf(browserStr) != -1) ? true: false;
}                
   
/**
 * 写入Cookie   
 * @param {String} cname  Cookie的key
 * @param {String} cvalue Cookie的value 
 * @param {String} days   Cookie的存活天数 
 */ 
function setCookie(cname, cvalue, days){
  var date = new Date();
  date.setDate(date.getDate()+days);  
  var exdate = "; expires="+date.toGMTString();  
  document.cookie = cname+"="+escape(cvalue)+exdate;   
} 

/**
 * 读取Cookie
 * @param  {String} cname Cookie的key 
 * @return {String} Cookie的value
 */
function getCookie(cname){
  var cvalue = "";   
  var cookies = document.cookie;              
  if(cookies.length > 0){     // 有cookie
      var search = cname + "=";
      var start = cookies.indexOf(search);
      if(start != -1){     // 有名字为cname的cookie 
        start += search.length;  
        var end = cookies.indexOf(";", start);
        if(end == -1){  
          end = cookies.length;       
        }    
        cvalue = unescape(cookies.substring(start, end));     
      }
  }  
  return cvalue;        
}
 
/**           
 * 过滤两端空格
 * @param {String} str 要过滤的原字符串    
 * @return {String} 过滤后的字符串   
 */         
function trim(str){        
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
}



