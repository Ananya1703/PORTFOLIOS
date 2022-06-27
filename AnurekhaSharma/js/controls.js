$(document).ready(function(){
    $("#hi").hide();
    $("#publications").hide();
    //alert(9)
});
$(".publications").click(function(){
	//alert(9090)
    $("#info").hide();
    $("#researchWork").hide();
    $("#publications").show();
});

$(".info").click(function(){
	 $("#info").show();
	 $("#publications").hide();
     $("#researchWork").hide();
});

$(document).ready(function(){
    $("#hi").hide();
    $("#researchWork").hide();
    //alert(9)
});
$(".researchWork").click(function(){
    //alert(9090)
    $("#info").hide();
    $("#publications").hide();
    $("#researchWork").show();
    //alert(10)
});

$(".info").click(function(){
     $("#info").show();
     $("#researchWork").hide();
     $("#publications").hide();
});