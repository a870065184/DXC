/**
 * scale_fn
 * @authors wuchangjiang (qianduanwcj@126.com)
 * @date    2016-01-22 09:26:58
 * @version v2016
 */
 function remReSize(){var w = $(window).width();try{w = $(parent.window).width();}catch(ex){};if(w>640){w = 640;};$('html').css('font-size',100/640*w+'px');$('#js_style_for_pc').remove();};remReSize();$(window).resize(remReSize);$(document).ready(function() {remReSize();});for(var i=0;i<3;i++){setTimeout(remReSize, 100*i);};

