// JavaScript Document

//下拉菜单
$(document).ready(function(){
	var qcloud={};
	$('[t_nav]').hover(function(){
		var _nav = $(this).attr('t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[t_nav]').each(function(){
		$(this)[ _nav == $(this).attr('t_nav') ? 'addClass':'removeClass' ];<!--('nav-up-selected')给li加背景颜色-->
		});
		$('#'+_nav).stop(true,true).slideDown(500);
		},150);
	},function(){
		var _nav = $(this).attr('t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
<!--		$('[t_nav]').removeClass('nav-up-selected');-->
		$('#'+_nav).stop(true,true).slideUp(100);
		},150);
	});
});
//nav 鼠标经过和离开颜色改变
$(document).ready(function(e) {
    $(".nav-text-1").mouseover(function(){
		$(this).addClass("intro-1");
		});
	$(".nav-text-1").mouseout(function(){
		$(this).removeClass("intro-1");
		});
		  $(".nav-text-2").mouseover(function(){
		$(this).addClass("intro-2");
		});
	$(".nav-text-2").mouseout(function(){
		$(this).removeClass("intro-2");
		});
		  $(".nav-text-3").mouseover(function(){
		$(this).addClass("intro-3");
		});
	$(".nav-text-3").mouseout(function(){
		$(this).removeClass("intro-3");
		});
		  $(".nav-text-4").mouseover(function(){
		$(this).addClass("intro-4");
		});
	$(".nav-text-4").mouseout(function(){
		$(this).removeClass("intro-4");
		});
		  $(".nav-text-5").mouseover(function(){
		$(this).addClass("intro-5");
		});
	$(".nav-text-5").mouseout(function(){
		$(this).removeClass("intro-5");
		});
		  $(".nav-text-6").mouseover(function(){
		$(this).addClass("intro-6");
		});
	$(".nav-text-6").mouseout(function(){
		$(this).removeClass("intro-6");
		});
		  $(".nav-text-7").mouseover(function(){
		$(this).addClass("intro-7");
		});
	$(".nav-text-7").mouseout(function(){
		$(this).removeClass("intro-7");
		});
});
