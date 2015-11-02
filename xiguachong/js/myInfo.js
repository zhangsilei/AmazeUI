$(function(){
	var manIcon = $(".man").children("img").eq(1);
	var womanIcon = $(".woman").children("img").eq(1);
	var ls = window.localStorage;
	var userObj = JSON.parse(ls.getItem('user'));
	var userInfo = $('.user-info li a'); 

	// 切换性别选项
	$(".man").children("img").eq(0).click(function(){      
		womanIcon.css("display", "none");      
		manIcon.css("display", "block");
	})
	$(".woman").children("img").eq(0).click(function(){        
		manIcon.css("display", "none");    
		womanIcon.css("display", "block");    
	})  
	
	// 拿到index.js传来的data，显示用户信息
	// 性别  
	if(userObj.sex == '男'){
		womanIcon.css("display", "none");          
		manIcon.css("display", "block");
	}else{  
		manIcon.css("display", "none");       
		womanIcon.css("display", "block"); 
	}   
	// 昵称   
	userInfo.eq(0).children('span').eq(1).html(userObj.nickname);   
	// 手机号
	userInfo.eq(1).children('span').eq(1).html(userObj.phoneNum);
})   

