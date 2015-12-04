$(function(){
	var manIcon = $("#man").children("img").eq(1);
	var womanIcon = $("#woman").children("img").eq(1);
	var userInfo = $('#user-info').find('a');        
  var saveBtn = $('.btn');
  var ls = window.localStorage;  
	var userObj = JSON.parse(ls.getItem('user'));         

	// 加载页面时请求后台数据   
  if(ls.getItem('flag') != 'success'){     // 不是三方登录 
    $.post('/Info/mobileUserInfo', {userId: userObj.userId}, function(data){   
      showUserInfo(data.sex, data.userName, data.mobile, data.email); 
    })   
  }else{     // 是三方登录  
    var userId = ls.getItem('userId');       
    $.post('/Info/getQQWCUserInfo', {userId: userId}, function(data){     
      showUserInfo(data.sex, data.nickName, data.mobile, data.email); 
    })   
  }                           
   
  // 在资料页面显示用户信息             
  function showUserInfo(dataSex, dataUsername, dataMobile, dataEmail){  
    var userName = userInfo.eq(0).children('span').eq(1);           
    var phoneNum = userInfo.eq(1).children('span').eq(1);              
    var email = userInfo.eq(2).children('span').eq(1);
    // 性别           
    dataSex == 1 ? displayController(womanIcon, manIcon) : displayController(manIcon, womanIcon); 
    // 昵称            
    if(getQueryString('from') == 'index'){     // 点击我的资料进来当前页面   
      userName.html(dataUsername);     // 从后台获取数据          
      ls.removeItem('newNickname');            
    }else{     // 从别的页面进来的            
      if(ls.getItem('newNickname') != null){     // 设置过草稿          
        userName.html(ls.getItem('newNickname'));              
      }else{            
        userName.html(userObj.nickname);                  
      }      
    }       
    // 手机号                     
    if(getQueryString('from') == 'index'){         
      phoneNum.html(dataMobile);  
      ls.removeItem('newphoneNum'); 
    }else{            
      if(ls.getItem('newphoneNum') != null){   
        phoneNum.html(ls.getItem('newphoneNum'));    
      }else{   
        phoneNum.html(userObj.phoneNum);    
      }   
    } 
    // 邮箱         
    if(getQueryString('from') == 'index'){   
      email.html(dataEmail);      
      ls.removeItem('newemail');  
    }else{  
      if(ls.getItem('newemail') != null){ 
        email.html(ls.getItem('newemail')); 
      }else{  
        email.html(userObj.email);
      }   
    }
    // 加载完数据后存到本地以保持用户登录状态                
    userObj.sex = dataSex;                                    
    userObj.nickname = dataUsername;                              
    userObj.phoneNum = dataMobile;                                                 
    userObj.email = dataEmail;                                   
    if(ls){                  
      ls.setItem('user', JSON.stringify(userObj));      
    }else{                           
      console.log('浏览器不支持localStorage！');                                            
    }  
  }    

  // 点击头像切换性别       
  $("#man").children("img").eq(0).click(function(){        
    displayController(womanIcon, manIcon);       
  })   
  $("#woman").children("img").eq(0).click(function(){ 
    displayController(manIcon, womanIcon);
  }) 
 
  // 保存所有用户信息（性别、昵称、邮箱）      
  // 除了手机、密码、地址（这三个单独修改）             
  saveBtn.click(function(){   
    var sex = manIcon.is(':visible') ? true : false;   
    $.post('/Info/QQWCSave', {       
      Id: userObj.userId,              
      sex: sex,           
      // userName: $('#userName').html(),  QQ用户不能改昵称           
      email: $('#email').html()           
    }, function(data){   
      if(data.state == 'fail'){       
        tipShowHide($('#tip'), error, data.msg);   
      }else{  
        alert('修改成功~');    
        // 保存成功后清除草稿信息
        ls.removeItem('newNickname');
        ls.removeItem('newphoneNum');
        ls.removeItem('newemail');
      }
    })
  })

}) 
