$(document).ready(function(){
	
	
	$("#findBuddyBtn").on('click',function(e){
		$("#tripsBtn").removeClass("highlights");
		$("#tripsPage").hide();
		$("#addTrip-step1").hide();
		$("#upcomingTripsHome").hide();
		$('#addTrip-step2').hide();
		$("#findBuddyPage").show();
	});

	$("#tripsBtn").on('click',function(e){

		$("#tripsBtn").addClass("highlight");
		$("#findBuddyPage").hide();
		$("#addTrip-step1").hide();
		$("#upcomingTripsHome").hide();
$('#addTrip-step2').hide();
		$("#tripsPage").show();

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
	});

	$('#addTrpStep2Btn').on('click',function(e){
		$("#tripsBtn").addClass("highlights");
		$('#tripsPage').hide();
		$("#findBuddyPage").hide();
		$('#upcomingTripsHome').hide();
		$('#addTrip-step1').hide();
		$('#addTrip-step2').show();
	});


	$("#tripsBtn").on('onLoad',function(e){
			$("#tripsBtn").addClass("highlights");
	});
	
	//$('#datetimepicker1').datetimepicker({showClose:  true,ignoreReadonly: true});
	
	$('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });

    $(".placepicker").placepicker();

	$("#tripsBtn").trigger("onLoad");

$("#tripsTgl :input").on('change',function(e){
	if($(this)[0].id == 'pastTripTgl'){
		$('#pastTrpMsg').show();
		$('#upcmgTrpMsg').hide();
	}else{
		$('#pastTrpMsg').hide();
		$('#upcmgTrpMsg').show();	
	}

});

	if (window.navigator.standalone) {
 	 $("meta[name='apple-mobile-web-app-status-bar-style']").remove();
	}
});