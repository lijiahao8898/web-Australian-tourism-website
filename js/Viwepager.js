// JavaScript Document
$(document).ready(function(e) {
$(function(){
	$("#gallery div").css("opacity","0")
	$("#gallery div").eq(0).css({"opacity":"1"})
	var index = 0;
	var maximg = 7;
	//滑动导航改变内容	
	$(".buttonnum span").hover(function(){
		if(MyTime){
			clearInterval(MyTime);
		}
		index  =  $(".buttonnum span").index(this);
		MyTime = setTimeout(function(){
		ShowjQueryFlash(index);
		$('#gallery').stop();
		} , 400);

	}, function(){
		clearInterval(MyTime);
		MyTime = setInterval(function(){
		ShowjQueryFlash(index);
		index++;
		if(index==maximg){index=0;}
		} , 3000);
	});
	//滑入 停止动画，滑出开始动画.
/*	 $('#gallery a').hover(function(){
			  if(MyTime){
				 clearInterval(MyTime);
			  }
	 },function(){
				MyTime = setInterval(function(){
				ShowjQueryFlash(index);
				index++;
				if(index==maximg){index=0;}
			  } , 6000);
	 });*/
	//自动播放
	var MyTime = setInterval(function(){
		ShowjQueryFlash(index);
		index++;
		if(index==maximg){index=0;}
	} , 3000);
});
function ShowjQueryFlash(i) {
$("#gallery div").eq(i).animate({opacity: 1},1000).css({"z-index": "1"}).siblings().animate({opacity: 0},1000).css({"z-index": "0"});
$(".buttonnum span").eq(i).addClass("current").siblings().removeClass("current");
}
    
});

//第二个幻灯片播放
$(document).ready(function(e) {
$(function(){
	$("#gallery_2 .nav-bg-2").css("opacity","0")
	$("#gallery_2 .nav-bg-2").eq(0).css({"opacity":"1"})
	var index_2 = 0;
	var maximg_2 = 3;
	//滑动导航改变内容	
	$(".buttonnum_2 span").hover(function(){
		if(MyTime_2){
			clearInterval(MyTime_2);
		}
		index_2  =  $(".buttonnum_2 span").index(this);
		MyTime_2 = setTimeout(function(){
		ShowjQueryFlash_2(index_2);
		$('#gallery_2').stop();
		} , 400);

	}, function(){
		clearInterval(MyTime_2);
		MyTime_2 = setInterval(function(){
		ShowjQueryFlash_2(index_2);
		index_2++;
		if(index_2==maximg_2){index_2=0;}
		} , 3000);
	});
	//滑入 停止动画，滑出开始动画.
/*	 $('#gallery a').hover(function(){
			  if(MyTime){
				 clearInterval(MyTime);
			  }
	 },function(){
				MyTime = setInterval(function(){
				ShowjQueryFlash(index);
				index++;
				if(index==maximg){index=0;}
			  } , 6000);
	 });*/
	//自动播放
	var MyTime_2 = setInterval(function(){
		ShowjQueryFlash_2(index_2);
		index_2++;
		if(index_2==maximg_2){index_2=0;}
	} , 3000);
});
function ShowjQueryFlash_2(i) {
$("#gallery_2 .nav-bg-2").eq(i).animate({opacity: 1},1000).css({"z-index": "1"}).siblings().animate({opacity: 0},1000).css({"z-index": "0"});
$(".buttonnum_2 span").eq(i).addClass("current").siblings().removeClass("current");
}
    
});