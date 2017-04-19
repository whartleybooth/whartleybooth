$(function(){

  $('#generate_sendBeacon').click(function() {

    marinSendBeacon();

  })
});


function marinSendBeacon(event) {
    var data = JSON.stringify({
      act: 2,
      conv_type: dataLayer[0].transactionId
      order_id: dataLayer[0].transactionId
    });
    navigator.sendBeacon('https://tracker.marinsm.com/tp', data);
  }
