$(function(){

	initPage();  

	var mobile = $('#mobile'); 
	var userPwd = $('#userPwd'); 
	var ls = window.localStorage;
	var defaultImgUrl = 'imgs/login/touxiang-1@2x.png';   
	var tip = $('#tip');       

	// 若是注册成功后跳转到本页面，则自动填写帐号                     
	if(getQueryString('mobile')){         
		mobile.val(getQueryString('mobile'));           
	} 
           
	// 登录事件           
	$(".btn").click(function(){            
		if(!/^1\d{10}$/.test(trim(mobile.val()))){     // 手机号不合法       
			tipShowHide(tip, warning, '请填写正确的手机号！');            
			return false;                    
		}else if(trim(userPwd.val()).length < 6){      // 密码不合法           
			tipShowHide(tip, warning, '密码至少六位字符！');                             
			return false;           
		}else{                 
			$.post('/Mobile/login', {mobile: mobile.val(), userPwd: userPwd.val()}, function(data){         
				if(data.state == 'fail'){             
					tipShowHide(tip, error, data.msg);              
				}else if(data.state == 'success'){     // 手机登录成功        
		      if(ls){                                                      
		        var userStr = JSON.stringify(new User(data.userId, data.msg, null, null, defaultImgUrl, null));     // 用户ID、用户名、用户头像 
		        ls.setItem('status', 'online');                                  
		        ls.setItem('user', userStr);                                                       
		        window.location.href = 'index.html';                                               
		      }else{                                                                         
		        console.log('浏览器不支持localStorage！');                                             
		      }                                        
				}                 
			})         
		}      
	})    
     
})      
           
$(window).resize(function(){initPage();})                    
       
// 页面初始化时，用JS定位部分元素    
function initPage(){    
	var accIpt = $(".phone input"), phoneIcon = $(".phone img"), pwdIcon = $(".pwd img"),           
		phoneleft = parseInt(accIpt.css("marginLeft")) + accIpt.width() - phoneIcon.width();  
	phoneIcon.css('left', phoneleft).show();               
	pwdIcon.css('left', phoneleft).show();   
}  


