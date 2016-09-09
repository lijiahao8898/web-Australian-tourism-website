$(document).ready(function(){
	//	鼠标经过显示片模块遮罩
	$(".textarea").hover(function(){
		$(".edit-img").css("display","block")
	},function(){
		$(".edit-img").css("display","none")
	})	
	$(".edit-img-box img").click(function(){
		$(".right").css("display","block")
	})
	
	//点击添加文字缩略图
    var index = 1;
	$(".add").click(function(){
		var html='<div class="text-textarea" id="text'+index+'" onmouseover="onmouseover1(this)" onmouseout = "mOut(this)">'
				+'<span class="text-textarea-tittle">标题</span>'
				+'<span class="img-box">缩略图</span>'+'<div class="edit-box">'
				+'<div class="edit-icon">'
				+'<img class="editIcon" id="edit'+index+'" src="img/edit.png"  onclick="clickEdit(this)" onmouseover="editeover(this)" onmouseout = "editeout(this)" />'
				+'<img class="deleteIcon" id="delete'+index+'" src="img/delete.png" onclick="clickDel(this)" onmouseover="deleteover(this)" onmouseout = "deleteout(this)" /></div></div></div>';
		$(html).insertBefore(".add");
		index++;
		
	})
	
	
	//图片库选择图片
	$(".uploadImgToLab").click(function(){	
//		var docHeight=$(document).height()+"px";	
//		var winWidth=$(window).width()+"px";
//		var winHeight=$(window).height()+"px";
//		alert(winHeight)
		$(".shade").css({
			display:"block",height:$(document).height()
		})
		$(".imglab-box").css({
			left:($("body").width()-$(".imglab-box").width())/2-20+"px",
			top:($(window).height()-$(".imglab-box").height())/2+"px",
			display:"block"
		});
	})
	//图片库选择图片
	$(".uploadImgToLab_2").click(function(){	
//		var docHeight=$(document).height()+"px";	
//		var winWidth=$(window).width()+"px";
//		var winHeight=$(window).height()+"px";
//		alert(winHeight)
		$(".shade_2").css({
			display:"block",height:$(document).height()
		})
		$(".imglab-box_2").css({
			left:($("body").width()-$(".imglab-box_2").width())/2-20+"px",
			top:($(window).height()-$(".imglab-box_2").height())/2+"px",
			display:"block"
		});
	})
	//关闭图片库弹出层
	$(".close").click(function(){
		$(".shade").css("display","none");
		$(".imglab-box").css("display","none");
	})
	$(".close_2").click(function(){
		$(".shade_2").css("display","none");
		$(".imglab-box_2").css("display","none");
	})
	
	$(".input-tittle").keypress(function(e){
		$(".left-tittle").html(tittle);
		var tittle=$(".input-tittle").val();
//		alert(tittle);
		$(".left-tittle").html(tittle);
	})
});



//鼠标经过遮罩出现
function onmouseover1(obj)
{
	var id = obj.getAttribute("id");
	$("#"+id).find(".edit-box").css("display","block");
}
function mOut(obj)
{
   var id = obj.getAttribute("id");
	$("#"+id).find(".edit-box").css("display","none");
}
//鼠标点击删除模块
function clickDel(obj){
	var id = obj.getAttribute("id");
	$("#"+id).parents(".text-textarea").remove()
}
//鼠标点击编辑模块
function clickEdit(obj){
	//	alert("sss")
	var id = obj.getAttribute("id");
	var preNum = $("#"+id).parents(".text-textarea").prevAll().length-1;
	//var length=$(".text-textarea").length;
	var Leng=80*preNum+140;
	$(".right-box").css("padding-top",Leng)
}
//鼠标经过icon改变
function editeover(obj){
	var id = obj.getAttribute("id");
	$("#"+id).attr("src","img/edit-1.png")
}
function editeout(obj){
	var id = obj.getAttribute("id");
	$("#"+id).attr("src","img/edit.png")
}
function deleteover(obj){
	var id = obj.getAttribute("id");
	$("#"+id).attr("src","img/delete-1.png")
}
function deleteout(obj){
	var id = obj.getAttribute("id");
	$("#"+id).attr("src","img/delete.png")
}
function clearMargin(){
	$(".right-box").css("padding-top",0);
	
}

//字数计算
$(document).ready(function(){
    $(".input-tittle").keyup(
    function(){
    	var content=$(this).val();
        var remain = $(this).val().length;
        if($(this).val()){
        	$(".left-tittle").html(content);
        	$(".count-word").html(remain);
        	if(remain > 64){
        		$(".count-word").css("color","red");
        		$(".number-word").css("color","red")
        	}else{
        		$(".count-word").css("color","#999999");
        		$(".number-word").css("color","#999999")
        	}
        }else{
        	$(".left-tittle").html("标题");
        }
        });
});










