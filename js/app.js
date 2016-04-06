$(document).ready(function(){
	
	
	$("#findBuddyBtn").on('click',function(e){
		$("#tripsBtn").removeClass("highlights");
		$("#tripsPage").slideUp("slow");
		$("#findBuddyPage").slideDown("slow");
	});
	
	$("#tripsBtn").on('click',function(e){

		$("#tripsBtn").addClass("highlight");
		$("#findBuddyPage").slideUp("slow");
		$("#tripsPage").slideDown("slow");

	});
	
	$("#tripsBtn").on('onLoad',function(e){
			$("#tripsBtn").addClass("highlights");
	});
	
	$('#datetimepicker1').datetimepicker({showClose:  true,ignoreReadonly: true});

	
	
	$("#tripsBtn").trigger("onLoad");
});