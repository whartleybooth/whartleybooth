$(function(){

  $('#generate_sendBeacon').click(function() {

    marinSendBeacon();

  })
});


function marinSendBeacon(event) {
    var data = JSON.stringify({
      act: 1,
      conv_type: "order"
    });
    navigator.sendBeacon('https://tracker.marinsm.com/tp', data);
  }
