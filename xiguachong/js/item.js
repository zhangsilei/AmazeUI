window.onload = function(){
	setElePosition();

	// 点击评论Tab
	$(".pinglun").click(function(){
		$(".xiangqing img").attr("src","images/index/xiangqing-2@2x.png");
		$(".xiangqing span").css("color","#fff");
		$(".xiangqing").css("borderBottom","none");
		$(".pinglun img").attr("src","images/index/pinglun-2@2x.png");
		$(".pinglun span").css("color","#2BC0D4");
		$(".pinglun").css("borderBottom",".1rem solid #2BC0D4");  
  
		// 加载评论内容
		$(".xiangqing-content").css("display","none");
		if($(".pinglun-content").html() == "" || $(".pinglun-content").html() == null){
			$(".body").append(
				"<ul class='pinglun-content'><li><img src='images/introduce/touxiang.png'>" +   
				"<span>我是小姜姜 : 点赞点赞点赞</span>" +
				"<p>刚刚发表</p></li></ul>"
			)
		}else{      
			$(".pinglun-content").css("display","block");   
		}
	})

	//点击详情Tab
	$(".xiangqing").click(function(){
		$(".pinglun img").attr("src","images/index/pinglun-1-@2x.png");
		$(".pinglun span").css("color","#fff");
		$(".pinglun").css("borderBottom","none");
		$(".xiangqing img").attr("src","images/index/xiangqing-1-@2x.png");
		$(".xiangqing span").css("color","#2BC0D4");
		$(".xiangqing").css("borderBottom",".1rem solid #2BC0D4"); 

		// 显示详情内容
		$(".pinglun-content").css("display","none");
		$(".xiangqing-content").css("display","block");    
	})

	// 点击分享按钮
	$("#bottom img").click(function(){ 
		$("#fenxiang").append(
			"<img src='images/nav/beijingmengban@2x.png' class='am-img-responsive share-zhezhao'>" +
			"<div class='total'><div class='weibo'>" +
			"<img src='images/nav/weibo-@2x.png' class='am-img-responsive'>" +
			"<span>新浪微博</span></div>" +
			"<div class='weixin'>" +      
			"<img src='images/nav/weixin@2x.png' class='am-img-responsive'>" +  
			"<span>微信好友</span></div>" +
			"<div class='qq'>" +
			"<img src='images/nav/qq@2x.png' class='am-img-responsive'>" +
			"<span>QQ 好友</span></div></div>" 
		)

		$(".share-zhezhao").click(function(){
			$("#fenxiang").empty();
		})
	})
}

$(window).resize(function(){
	setElePosition();
})

function setElePosition(){
	var screenWidth = $(window).width();
	// 视频
	var video = $(".video");
	var zhezhao = $(".zhezhao");
	var iLeft = (screenWidth - video.width()) / 2;         
	zhezhao.css("left",iLeft);  
	// 播放按钮
	var play = $(".play");
	var pTop = (video.height() - play.height()) / 2;
	var pLeft = (screenWidth - play.width()) / 2;
	play.css("top",pTop);
	play.css("left",pLeft);
	// 收藏按钮
	var love = $(".love"); 
	var lRight = (screenWidth - video.width()) / 2;
	love.css("right",lRight);
	// 图片
	var lArrow = $(".arrow:eq(0)");
	var rArrow = $(".arrow:eq(1)");
	var main = $(".main");
	lArrow.css("top",video.height()+main.height()/2);
	lArrow.css("left",main.css("marginLeft"));
	rArrow.css("top",video.height()+main.height()/2);
	rArrow.css("right",main.css("marginRight"));
	// 支持按钮
	var bottom = $("#bottom");
	var img = $("#bottom img");
	var input = $("#bottom input");
	var bWidth = bottom.width() - img.width() - input.width() - 35;
	$("#bottom button").css("width",bWidth);
}