/* 需要提前加载的组件 */
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

  /* 首页轮播图按钮 */
  $('.btn-loading-example').click(function () {
    var $btn = $(this)    
    $btn.button('loading');    
      setTimeout(function(){
        $btn.button('reset');   
    }, 5000);
  });     
})(jQuery);     

/* 节点加载完毕后的页面渲染操作 */
$(document).ready(function(){    
  setLiSize();
  setTipLoc();
  setLoginLink();
  //$(".register-btn").popover('close');

  /* 更多按钮事件 */
  var count = 3;     // 默认显示3个电影          
  var lis = $("#movie-list").children("li");      
  lis.css("display","none");
  for(var i = 0; i < count; i++){
    $("#movie-list").children("li").eq(i).css("display","block");       
  } 
  $("#more").click(function(){ 
    if(count == lis.length){     
      return;   
    }else{   
      count++;
      $("#movie-list").children("li").eq(count-1).css("display","block");
      if(count == lis.length){  
        $(".am-list-news-ft").remove();   
        $(".am-divider").remove();
      }
    }       
  })     

  /* 首页底部的登陆、注册按钮跳转 */
  $(".bottom-login").click(function(){
    window.location.href = "amaze_login.html";
  })
  $(".bottom-register").click(function(){
    window.location.href = "amaze_register.html";
  })

  /* 用户协议按钮事件 */    
  $(".protocal input:eq(0)").click(function(){
    if($(this).attr("checked") != null){     
      $(".register-btn").attr("disabled", true);      
      $(".protocal input:eq(0)").attr("checked", null);      
    }else{      
      $(".register-btn").attr("disabled", false);    
      $(".protocal input:eq(0)").attr("checked", "checked");        
    }
  })

  /* 注册校验 */
  $(".register-btn").click(function(){        
    var validateAcc = /[\w]/g;
    if(!validateAcc.test($("#login-acc").val())){   
      $(".error-tip > p").html("请输入正确的账号名!");         
      $(".error-tip").show();   
    }else if($(".am-form-set > input:eq(1)").val().length < 6){
      $(".error-tip > p").html("密码不能小于六个字符!");
      $(".error-tip").show();
    }else if($(".am-form-set > input:eq(1)").val() != $(".am-form-set > input:eq(2)").val()){
      $(".error-tip > p").html("两次密码输入不一致!");    
      $(".error-tip").show();
    }else{     // 注册成功   
      /* 使用cookie模拟数据库来保存用户信息 */          
      setCookie("db_acc", $("#login-acc").val(), 365);            
      setCookie("db_pwd", $(".am-form-set > input:eq(1)").val(), 365); 
      $(this).popover({
        theme: 'primary',
        content: '注册成功!'
      })       
      $(this).popover('open');       
      setTimeout(function(){   
        window.location.href = "amaze_login.html";
      }, 800);      
    }                  
  })
       
  /* 登录校验 */
  $(".login-btn").click(function(){    
    if($("#login-acc").val() != getCookie("db_acc")){ 
      $(".error-tip > p").html("用户不存在!");    
      $(".error-tip").show();       
    }else if($("#login-pwd").val() != getCookie("db_pwd")){       
      $(".error-tip > p").html("账号名和密码不匹配!");    
      $(".error-tip").show();      
    }else{
      window.location.href = "amaze_personal.html";     
    }
  })

  /* 购票页面头部日期 */
  var date = new Date();
  var month = date.getMonth()+1;
  var day = date.getDate();    
  if(day < 10){
    day = "0" + day;     
  }
  $(".buy-top > button:eq(0)").html("今天"+month+"月"+day+"日");
  $(".buy-top > button:eq(1)").html("明天"+month+"月"+(parseInt(day)+1)+"日");           
  $(".buy-top > button:eq(2)").html("后天"+month+"月"+(parseInt(day)+2)+"日");          
})    
    
/* 窗口大小改变时的事件 */   
$(window).resize(function(){    
  setLiSize();
  setTipLoc();  
  setLoginLink();  
})

/**
 * 设置首页每行链接的宽高与<li>的高度一致
 */
var setLiSize = function(){
  var aWidth = $(".content li:eq(0)").width();
  var aHeight = $(".content img:eq(0)").height();   
  $(".content a").css("width", aWidth);    
  $(".content a").css("height", aHeight);       
}

/**
 * 设置首页小徽章的排版
 */    
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

/**
 * 设置登陆页下边链接样式，即“立即注册”和“找回密码”
 */
var setLoginLink = function(){
  if(document.documentElement.clientWidth <= 640){     // 移动端
    $(".login-register").css("marginLeft", "12px");
    $(".login-findpwd").css("marginRight", "12px");
  }else{
    $(".login-register").css("marginLeft", "18px");
    $(".login-findpwd").css("marginRight", "18px");
  }
}
   
/**
 * 写入Cookie
 * @method setCookie
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
 * @method getCookie
 * @param  {String} cname Cookie的key
 * @return {String} 
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