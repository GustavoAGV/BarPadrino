$(document).ready(function()
{
	$(".black").on("click",function()
	{
		var nombre=$(".input").val();
		var comentar=$(".inpu").val();
		$(".comentario").html("de:"+nombre+"<br>"+"comentario:"+comentar);
	})
})