window.onload = function(){
	setEleLocation();
}

$(window).resize(function(){
	setEleLocation();
})

/**
 * 设置元素位置   
 */    
function setEleLocation(){
	// 图片
	var screenWidth = $(window).width();
	var img = $(".img");     
	var zhezhao = $(".zhezhao");
	var iLeft = (screenWidth - img.width()) / 2;
	img.css("left",iLeft);   
	zhezhao.css("left",iLeft);   
	// 文字
	$(".item .span").css("width",img.width());
}