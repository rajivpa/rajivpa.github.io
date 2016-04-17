$(document).ready(function(){
	
	
	$("#findBuddyBtn").on('click',function(e){
		$("#tripsBtn").removeClass("highlights");
		$("#tripsPage").hide("slow");
		$("#addTrip-step1").hide("slow");
		$("#upcomingTripsHome").hide("slow");
		$("#findBuddyPage").show("slow");
	});

	$("#tripsBtn").on('click',function(e){

		$("#tripsBtn").addClass("highlight");
		$("#findBuddyPage").hide("slow");
		$("#addTrip-step1").hide("slow");
		$("#upcomingTripsHome").hide("slow");
		$("#tripsPage").show("slow");

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