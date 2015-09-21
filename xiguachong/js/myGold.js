window.onload = function(){
	setElePosition();
}

$(window).resize(function(){
	setElePosition();
})

function setElePosition(){
	var screenWidth = $(window).width();
	// 我的积分
	var bg = $(".current img:eq(0)"); 
	var span = $(".current span:eq(0)");
	span.css("left",bg.css("marginLeft"));
	span.css("display","block");
	// 积分数
	var number = $(".current span:eq(1)");
	var nTop = (bg.height() - number.height()) / 2;
	var nLeft = (screenWidth - number.width()) / 2;
	number.css("top",nTop);
	number.css("left",nLeft);
	number.css("display","block");
	// 如何积分
	var i = $(".i");
	var how = $(".how");
	var jiantou = $(".jiantou");
	i.css("bottom",20);
	i.css("right",(screenWidth - bg.width()) / 2 + 100);
	i.css("display","inline-block");
	how.css("bottom",18);
	how.css("right",(screenWidth - bg.width()) / 2 + 40);
	how.css("display","inline-block");
	jiantou.css("bottom",20);
	jiantou.css("right",(screenWidth - bg.width()) / 2 + 20);
	jiantou.css("display","inline-block");
}