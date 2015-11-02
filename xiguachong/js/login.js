$(document).ready(function(){
	initPage();
	$(".btn").click(function(){
		window.location.href = "index.html?result=success";
	})
})  

$(window).resize(function(){
	initPage();
})    
  
/**
 * 页面初始化时，用js定位部分元素
 */
function initPage(){
	var accIpt = $(".phone input");      
	var pwdIpt = $(".pwd input");  
	var phone = $(".phone img");   
	var pwd = $(".pwd img");
	var phoneleft = parseInt(accIpt.css("marginLeft")) + accIpt.width() - phone.width();
	phone.css("left",phoneleft).css("display", "block"); 
	var pwdLeft = parseInt(pwdIpt.css("marginLeft")) + pwdIpt.width() - pwd.width();
	pwd.css("left",pwdLeft).css("display", "block");   
}
