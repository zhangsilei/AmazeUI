$(function(){  

	var mobile = $('#mobile');
	var code = $('#code'); 
	var userPwd = $('#userPwd');    
	var codeBtn = $('#codeBtn');        
  var ls = window.localStorage;  
  var tip = $('#tip')   
	// 获得验证码后用户刷新了页面        
	if(ls.getItem('mobile')){       
		mobile.attr('value', ls.getItem('mobile'));                  
		timer(120);                  
	}                  
                 
	// 发送验证码                            
	codeBtn.click(function(){                          
		if(!/^1\d{10}$/.test(trim(mobile.val()))){     // 手机号不合法      
			tipShowHide(tip, loginWarning, '请填写正确的手机号！');          	     
		}else{                
			$.post('/Mobile/forget', {mobile: mobile.val()}, function(data){           
				if(data.state == 'fail'){   
					tipShowHide(tip, loginError, data.msg);             
				}                                        
			})                
			// timer(120);                     
			if(ls){    
				ls.setItem('mobile', mobile.val());                          
			}else{            
				console.log('浏览器不支持localStorage');         
			}   
		}         
	})       

	// 倒计时120秒，seconds为秒数
	function timer(seconds){  
		// var timer = setInterval(function(){     
		// 	if(seconds == 0){      
		// 		if(ls.getItem('mobile')){
		// 			ls.removeItem('mobile');
		// 		}
		// 		codeBtn.html('获取验证码');       
		// 		codeBtn.attr('disabled', 'enabled');  
		// 		return;      
		// 	}else{       
		// 		codeBtn.attr('disabled', 'disabled'); 
		// 		codeBtn.html(seconds + '秒');     
		// 		seconds--; 
		// 	}               
		// }, 1000);        
	} 
              
	// 修改密码事件          
	$('.btn').click(function(){                  
		// 数据合法性验证      
		if(!/^1\d{10}$/.test(trim(mobile.val()))){     // 手机号不合法 
			tipShowHide(tip, loginWarning, '请填写正确的手机号！');              
			return false;                
		}else if(!/^\d{6}$/.test(trim(code.val()))){     // 验证码不合法
			tipShowHide(tip, loginWarning, '验证码只能输入六位数字！');                         
			return false;   
		}else if(trim(userPwd.val()).length < 6){     // 密码不合法            
			tipShowHide(tip, loginWarning, '密码至少六位字符！');               
			return false;          
		}else{     // 输入正确
			$.post('/Mobile/update', {mobile: mobile.val(), code: code.val(), userPwd: userPwd.val()}, function(data){  
			  if(data.state == 'fail'){  
			  	tipShowHide(tip, loginError, data.msg);  
			  }else if(data.state == 'success'){
			  	window.location.href = 'login.html?mobile=' + mobile.val(); 
			  }
			})        
		}   
	})

})
