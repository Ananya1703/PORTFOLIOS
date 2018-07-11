$(document).ready(function(){
    $("#hi").hide();
    $("#publications").hide();
    //alert(9)
});
$(".publications").click(function(){
	//alert(9090)
    $("#info").hide();
    $("#publications").show();
});

$(".info").click(function(){
	 $("#info").show();
	 $("#publications").hide();
});