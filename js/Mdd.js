// JavaScript Document
$(document).ready(function(e) {
		var n=0;
    $(".text").mouseover(function(){
		   
		n=$(".text").index(this);
		<!--document.title=n; --> 	
		$(".text").eq(n).addClass("pmousehover");
        $(this).css("color","#fff");
		$(this).fadeIn("10000");
		});
		  $(".text").mouseout(function(){
		n=$(".text").index(this);
		$(".text").eq(n).removeClass("pmousehover");
		$(this).css("color","#7e7e7e");
		});
		   $(".text").click(function(){
		$(".text span").eq(n).css("color","#fff");
		$(this).css("background-color","green");
		});
});