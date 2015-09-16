$(document).ready(function(){
	setLocation();
})
$(window).resize(function(){
	setLocation();
})
function setLocation(){
	var accIpt = $(".phone input");
	var pwdIpt = $(".pwd input");
	var phone = $(".phone img");
	var pwd = $(".pwd img");
	var phoneleft = parseInt(accIpt.css("marginLeft")) + accIpt.width() - phone.width();
	phone.css("left",phoneleft); 
	var pwdLeft = parseInt(pwdIpt.css("marginLeft")) + pwdIpt.width() - pwd.width();
	pwd.css("left",pwdLeft);
}