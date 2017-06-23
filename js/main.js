$(function(){

  $('#generate_sendBeacon').click(function() {

    marinSendBeacon();

  })
});


$(function(){

  $('#msm_test').click(function() {

     var track = new Image();
     track.src="https://tracker.marinsm.com/tp?act=2&cid=24l339123&currency=&trans=UTM:I|" + myFunction() + "aA|order|product|category|50.21|";

  })
});


function marinSendBeacon(event) {
    var data = JSON.stringify({
      trackerId: "3423sdfs23",
      act: 2,
      conv_type: "order",
      order_id: dataLayer[0].transactionId,
      transactionProducts: dataLayer[0].transactionProducts
    });
    navigator.sendBeacon('https://tracker.marinsm.com/tp', data);
  }
