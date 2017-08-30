$(function(){
	
	$('body')
	//切换
	.delegate('.text_cont .click_more','touchend',function(){
		$(this).addClass('active').html('<i class="icon"></i>正在加载，请稍后...');
		
		//ajax
		$('.text_cont .text_parent .text_common').eq($(this).attr('data-index')).find('ul').append('<li><a href="javascriot:;" class="fl">【公 告】造化之门安卓不限号测试</a><span class="fr">08-15</span></li>');
		$(this).removeClass('active').html('加载更多');
	})
})