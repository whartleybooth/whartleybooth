$(function(){

  $('#generate_sendBeacon').click(function() {

    marinSendBeacon();

  })
});


$(function(){

  $('#msm_test').click(function() {

     var time = Date.now()

     var track = new Image();
     track.src="https://tracker.marinsm.com/tp?act=2&cid=2764ri918980&currency=GBP&trans=UTM:I|" + time + dataLayer[0].transactionId "|lifeclickout|||" + dataLayer[0].transactionTotal + "|";

     function() {
       fbq('track', 'Purchase', { value: dataLayer[0].transactionTotal, currency: 'USD', order_id: time + dataLayer[0].transactionId})
         }
});



  });
