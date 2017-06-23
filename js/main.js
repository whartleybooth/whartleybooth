$(function(){

  $('#generate_sendBeacon').click(function() {

    marinSendBeacon();

  })
});


$(function(){

  $('#msm_test').click(function() {

     var time = Date.now()


     marinImage();

});
});

function test(time) {
  fbq('track', 'Purchase', {
value: 247.35,
currency: 'USD',
order_id: time //this is the only purchase / lead event parameter we require for this project. We obtain the other values from the Marin event code.
});
};

function marinImage(time) {

var track = new Image();
track.src="https://tracker.marinsm.com/tp?act=2&cid=2764ri918980&currency=GBP&trans=UTM:I|" + time + dataLayer[0].transactionId + "|lifeclickout|||" + dataLayer[0].transactionTotal + "|";

};



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
