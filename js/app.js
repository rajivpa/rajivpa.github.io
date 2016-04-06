$(document).ready(function(){
	$("#findBuddyBtn").on('click',function(e){
		$("#tripsPage").slideUp("slow");
		$("#findBuddyPage").slideDown("slow");
	});
	
	$("#tripsBtn").on('click',function(e){
		$("#findBuddyPage").slideUp("slow");
		$("#tripsPage").slideDown("slow");

	});
	
	$('#datetimepicker1').datetimepicker({showClose:  true,ignoreReadonly: true});

});