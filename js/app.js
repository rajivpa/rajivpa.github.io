$(function(){


})
$(document).ready(function() {

   var inviteBtnsVisible=false;
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

   $('div.searchProfileRow input:checkbox').change(function(){
       if(this.checked){
         if(inviteBtnsVisible) return;
          $('#inviteBtnSet').show();
          inviteBtnsVisible=true;
       }
   })
});
