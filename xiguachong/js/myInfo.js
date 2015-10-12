$(document).ready(function(){
	var manIcon = $(".man").children("img").eq(1);
	var womanIcon = $(".woman").children("img").eq(1);

	// 切换性别选项
	$(".man").children("img").eq(0).click(function(){
		womanIcon.css("display", "none");
		manIcon.css("display", "block");
	})
	$(".woman").children("img").eq(0).click(function(){
		manIcon.css("display", "none");
		womanIcon.css("display", "block");
	})
})

