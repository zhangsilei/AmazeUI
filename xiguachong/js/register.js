$(function(){  
	var mobile = $('#mobile');
	var code = $('#code'); 
	var userName = $('#userName');        
	var userPwd = $('#userPwd');    
  
	// 数据合法性验证
	

	// 发送验证码          
	$('#codeBtn').click(function(){                   
		$.get('/Mobile/userRegister', {mobile: mobile.val()}, function(data){                      
			if(data == 1){                 
				console.log('手机号已注册！');            
			}       
		});         
	})     
 
	// 注册事件
	$('.btn').click(function(){  
		$.get('/Mobile/Register', {mobile: mobile.val(), code: code.val(), userName: userName.val(), userPwd: userPwd.val()}, function(data){  
			switch(parseInt(data)){  
				case 0:  
					console.log('注册成功！');
					break;
				case 1:        
					console.log('手机号已注册！');   
					break;
				case 2:  
					console.log('验证码错误！');
					break;  
				case 3:
				  console.log('密码错误！');  
				  break;   
				case 4:
					console.log('手机号不存在！');
					break;
			}
		});
	})	
})
