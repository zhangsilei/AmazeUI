$(document).ready(function(){
	/* 浏览器样式兼容 */
  fitBrowser();
})    


/**
 * 浏览器兼容
 */
var fitBrowser = function(){
   if(navigator.userAgent.indexOf("Firefox") != -1){     // ff
    // logo
    $(".content-left-logo").addClass("ff-content-left-logo");   
    $(".content-left-logo").removeClass("content-left-logo");
    // 微信   
    $(".content-left-weixin-img").addClass("ff-content-left-weixin-img"); 
    $(".content-left-weixin-img").removeClass("content-left-weixin-img"); 
    $(".content-left-weixin-span").addClass("ff-content-left-weixin-span");
    $(".content-left-weixin-span").removeClass(".content-left-weixin-span");
    // 微博  
    $(".content-left-weibo-img").addClass("ff-content-left-weibo-img"); 
    $(".content-left-weibo-img").removeClass("content-left-weibo-img"); 
    $(".content-left-weibo-span").addClass("ff-content-left-weibo-span");
    $(".content-left-weibo-span").removeClass(".content-left-weibo-span");
  }
}

	
 