$(function(){  
	var mobile = $('#mobile');
	var code = $('#code'); 
	var userName = $('#userName');        
	var userPwd = $('#userPwd');   
	var codeBtn = $('#codeBtn'); 
  var ls = window.localStorage;
	// 获得验证码后用户刷新了页面
	if(ls.getItem('mobile')){      
		mobile.attr('value', ls.getItem('mobile'));
		timer(120);
	}     

	// 发送验证码              
	codeBtn.click(function(){                     
		if(!/^1\d{10}$/.test(trim(mobile.val()))){     // 手机号不合法
			loginWarning('请填写正确的手机号！');                  
		}else{         
			$.get('/Mobile/sendCode', {mobile: mobile.val()}, function(data){                                    
				if(data == 1){                                
					loginError('手机号已注册！');                              
				}                   
			})          
			timer(120);      
			if(ls){    
				ls.setItem('mobile', mobile.val());        
			}else{     
				console.log('浏览器不支持localStorage');   
			}
		}         
	})       

	// 倒计时120秒，seconds为秒数
	function timer(seconds){  
		var timer = setInterval(function(){
			if(seconds == 0){      
				if(ls.getItem('mobile')){
					ls.removeItem('mobile');
				}
				codeBtn.html('获取验证码');    
				codeBtn.attr('disabled', 'enabled');  
				return;      
			}else{       
				codeBtn.attr('disabled', 'disabled'); 
				codeBtn.html(seconds + '秒');     
				seconds--;
			}              
		}, 1000);        
	}
     
	// 注册事件      
	$('.btn').click(function(){             
		// 数据合法性验证    
		if(!/^1\d{10}$/.test(trim(mobile.val()))){     // 手机号不合法    
			loginWarning('请填写正确的手机号！');       
			return false;                
		}else if(!/^\d{6}$/.test(trim(code.val()))){     // 验证码不合法             
			loginWarning('验证码只能输入六位数字！');      
			return false;   
		}else if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/g.test(trim(userName.val()))){     // 用户名不合法       
			loginWarning('昵称只能输入中文、数字、字母或下划线！');        
			return false;      
		}else if(trim(userPwd.val()).length < 6){            
			loginWarning('密码至少六位字符！');             
			return false;      
		}else{     // 输入正确
			$.get('/Mobile/Register', {mobile: mobile.val(), code: code.val(), userName: userName.val(), userPwd: userPwd.val()}, function(data){  
				var json = JSON.parse(data);
				console.log(json);			       
			})  
		}   
	})      

	// 前台合法性错误提示  
	function loginWarning(warInfo){     
		$('#tip').addClass('am-alert am-alert-warning').css('margin', 0).alert().html(warInfo);   
	} 

	// 后台逻辑性错误提示
	function loginError(errInfo){
		$('#tip').addClass('am-alert am-alert-danger').css('margin', 0).alert().html(errInfo);
	}	
})
