$(function(){
	initPage();

	var mobile = $('#mobile');
	var userPwd = $('#userPwd'); 
	$(".btn").click(function(){
		$.get('/Mobile/login', {mobile: mobile.val(), userPwd: userPwd.val()}, function(data){
			console.log(data);
		})   
	})

})  
    
$(window).resize(function(){       
	initPage();             
})       
  
/**   
 * 页面初始化时，用js定位部分元素   
 */   
function initPage(){   
	var accIpt = $(".phone input"), phoneIcon = $(".phone img"), pwdIcon = $(".pwd img");           
	var phoneleft = parseInt(accIpt.css("marginLeft")) + accIpt.width() - phoneIcon.width();  
	phoneIcon.css("left", phoneleft).css("display", "block");             
	pwdIcon.css("left", phoneleft).css("display", "block");   
}  
