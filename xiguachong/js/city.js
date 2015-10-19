$(window).ready(function(){
	var imgPathNotChecked = "imgs/city/待选@2x.png";
	var imgPathChecked = "imgs/city/已选@2x.png";
	changeCity(imgPathNotChecked, imgPathChecked);  
})

/**
 * 城市选择
 * @param  {string} imgPathNotChecked 未选中图片路径
 * @param  {[type]} imgPathChecked    选中图片的路径
 */
function changeCity(imgPathNotChecked, imgPathChecked){
	// 城市选择事件 
	$("#content li").click(function(){
		var radio = $(this).children("img");
		if(radio.length > 0){  
			if(radio.attr("src") == imgPathNotChecked){   
				// 清除已选的城市
				$("#content li").each(function(index){
					if($(this).children("img").attr("src") == imgPathChecked){    
						$(this).children("img").attr("src", imgPathNotChecked);
					}
				})         
				radio.attr("src", imgPathChecked);
			}else if(radio.attr("src") == imgPathChecked){    
				radio.attr("src", imgPathNotChecked);    
			}
		}
	})
}