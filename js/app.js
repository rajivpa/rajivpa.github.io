$(function(){


})
$(document).ready(function() {


   $('#ticketsBooked').change(function () {
      if ($('#ticketsBooked').is(':checked')) {
          $('#airlines').show();
          $('#flightNo').show();
          $('#pnrNo').show();
      } else {
        $('#airlines').hide();
        $('#flightNo').hide();
        $('#pnrNo').hide();
      }
   });

   $('#searchBtn').on('click',(function(e){

       $('#searchBuddyResults').show();
   }));
   $('#searchResetBtn').on('click',(function(e){
       $('#searchBuddyResults').hide();
   }));

});
