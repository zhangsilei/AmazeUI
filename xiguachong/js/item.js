/*************************************
 *
 * 项目介绍页
 * 
 ************************************/
window.onload = function(){
	setElePosition();

	// 点击评论Tab
	$(".pinglun").click(function(){
		$(".xiangqing img").attr("src","imgs/item/xiangqing-2@2x.png");
		$(".xiangqing span").css("color","#fff");
		$(".xiangqing").css("borderBottom","none");
		$(".pinglun img").attr("src","imgs/item/pinglun-2@2x.png");
		$(".pinglun span").css("color","#2BC0D4");
		$(".pinglun").css("borderBottom",".1rem solid #2BC0D4");  
  
		// 加载评论内容
		$(".xiangqing-content").css("display","none");
		if($(".pinglun-content").html() == "" || $(".pinglun-content").html() == null){
			$(".body").append(
				"<ul class='pinglun-content'><li><img src='imgs/item/weixintouxiang-@2x.png'>" +   
				"<span>我是小姜姜 : 点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞点赞</span>" + 
				"<p>刚刚发表</p></ul>" +
				"<ul class='pinglun-content'><li><img src='imgs/item/weixintouxiang-@2x.png'>" +   
				"<span>我是小姜姜 : 点赞点赞点赞</span>" + 
				"<p>刚刚发表</p></ul>"
			)
		}else{      
			$(".pinglun-content").css("display","block");     
		}
	})

	//点击详情Tab
	$(".xiangqing").click(function(){
		$(".pinglun img").attr("src","imgs/item/pinglun-1-@2x.png");
		$(".pinglun span").css("color","#fff");
		$(".pinglun").css("borderBottom","none");
		$(".xiangqing img").attr("src","imgs/item/xiangqing-1-@2x.png");
		$(".xiangqing span").css("color","#2BC0D4");
		$(".xiangqing").css("borderBottom",".1rem solid #2BC0D4"); 

		// 显示详情内容
		$(".pinglun-content").css("display","none");
		$(".xiangqing-content").css("display","block");    
	})

	// 点击分享按钮
	$("#bottom img").click(function(){ 
		$("#fenxiang").append(
			"<img src='imgs/item/mengban@2x.png' class='am-img-responsive share-zhezhao'>" +
			"<div class='total'><div class='weibo'>" +
			"<img src='imgs/item/weibo-@2x.png' class='am-img-responsive'>" +
			"<span>新浪微博</span></div>" +
			"<div class='weixin'>" +      
			"<img src='imgs/item/weixin@2x.png' class='am-img-responsive'>" +  
			"<span>微信好友</span></div>" +
			"<div class='qq'>" +
			"<img src='imgs/item/qq@2x.png' class='am-img-responsive'>" +
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
	var video = $(".video");
	// 播放按钮
	var play = $(".play");
	var pTop = (video.height() - play.height()) / 2;
	play.css("top",pTop).css("display", "block");
	// 收藏按钮
	var lRight = ($(window).width() - video.width()) / 2;
	$(".love").css("right", lRight).css("display", "block");
}