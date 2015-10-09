$(document).ready(function(){
	setEleLocation();
	$(".btn").click(function(){
		window.location.href = "index.html?result=success";
	})
})  

$(window).resize(function(){
	setEleLocation();
})    

/**
 * Hack定位图标
 */
function setEleLocation(){
	var accIpt = $(".phone input");      
	var pwdIpt = $(".pwd input");  
	var phone = $(".phone img");   
	var pwd = $(".pwd img");
	var phoneleft = parseInt(accIpt.css("marginLeft")) + accIpt.width() - phone.width();
	phone.css("left",phoneleft).css("display", "block"); 
	var pwdLeft = parseInt(pwdIpt.css("marginLeft")) + pwdIpt.width() - pwd.width();
	pwd.css("left",pwdLeft).css("display", "block");   
}
