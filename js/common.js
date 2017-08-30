$(function(){
	$('body')
	//切换
	.delegate('.select .select_title  li','touchend',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.select .select_txt .select_content li').eq($(this).index()).removeClass('hidden').siblings(".select_content li").addClass('hidden');
	})
	$(".body").delegate('.search_txt input','focus',function(){
		$(".search_txt label").css({
			"display":"none",
		})
		
	})
	$(".body").delegate('.search_txt input','blur',function(){
		$(".search_txt label").css({
			"display":"block",
		})
		
	})
	$(".body").delegate('.search_txt label','click',function(){
		$(".search_txt input").focus();
		$(".search_txt label").css({
			"display":"none",
		})
	})	
	$('body')
	//切换
	.delegate('.footer ul li','touchend',function(){
		$(this).addClass('select_back icon').siblings().removeClass('select_back icon');
	})
})