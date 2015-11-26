$(function(){
	var setDefault = $('.default');

	// 设为默认
	setDefault.click(function(){
		setDefault.each(function(){
			var radio = $(this).find('img');
			if(radio.attr('src') == 'imgs/city/已选@2x.png'){
				radio.attr('src', 'imgs/city/待选@2x.png');   
				return;
			} 
		}) 
		$(this).find('img').attr('src', 'imgs/city/已选@2x.png');
	})
})  