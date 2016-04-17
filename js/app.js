$(document).ready(function(){
	
	
	$("#findBuddyBtn").on('click',function(e){
		$("#tripsBtn").removeClass("highlights");
		$("#tripsPage").slideUp("slow");
		$("#addTrip-step1").slideUp("slow");
		$("#upcomingTripsHome").slideUp("slow");
		$("#findBuddyPage").slideDown("slow");
	});

	$("#tripsBtn").on('click',function(e){

		$("#tripsBtn").addClass("highlight");
		$("#findBuddyPage").slideUp("slow");
		$("#addTrip-step1").slideUp("slow");
		$("#upcomingTripsHome").slideUp("slow");
		$("#tripsPage").slideDown("slow");

	});
	
	$('#upcmgTripDshbrd').on('click',function(e){
		$("#tripsBtn").addClass("highlights");
		$('#tripsPage').hide();
		$("#findBuddyPage").hide();
		$("#addTrip-step1").hide();
		$('#upcomingTripsHome').show();
	});

	$('#planATripBtn').on('click',function(e){
		$("#tripsBtn").addClass("highlights");
		$('#tripsPage').hide();
		$("#findBuddyPage").hide();
		$('#upcomingTripsHome').hide();
		$('#addTrip-step1').show();
	})


	$("#tripsBtn").on('onLoad',function(e){
			$("#tripsBtn").addClass("highlights");
	});
	
	//$('#datetimepicker1').datetimepicker({showClose:  true,ignoreReadonly: true});

	
	$('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });

	$("#tripsBtn").trigger("onLoad");
});