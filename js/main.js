$(function(){

  $('#generate_click_callback').click(function() {

    var rum = {
             page: window.location,
             cid: "24l339123",
             act: 1,
         };
     rum = reduce(rum);
     navigator.sendBeacon('http://tracker.marinsm.com/tp?', JSON.stringify(rum));
}, false);


  })
