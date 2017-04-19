$(function(){

  $('#generate_click_callback').click(function() {

    generate_sendBeacon();

  })
});


function marinSendBeacon(event) {
    var data = JSON.stringify({
      act: 1,
      conv_type: "order"
    });
    navigator.sendBeacon('https://tracker.marinsm.com/tp', data);
  }
