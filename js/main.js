$(function(){

  $('#generate_click_callback').click(function() {

  console.log('test');
  // marinClickCall();
  marinClickTag()


  })
});


function marinClickCall() {
  var track = new Image();
   track.src="https://tracker.marinsm.com/tp?act=1&cid=62571g0b12611868&tz=-1&ref=&page=http%3A%2F%2Fwhartleybooth.co.uk%2Fmarin_tests.html%3Fmkwid%3Ds5OV7lY0f";
};


function marinClickTag() {
var _mTrack = _mTrack || [];
_mTrack.push(['trackPage']);

(function() {
var mClientId = '24l339123';
var mProto = (('https:' == document.location.protocol) ? 'https://' : 'http://');
var mHost = 'tracker.marinsm.com';

var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true; mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
var fscr = document.getElementsByTagName('script')[0]; fscr.parentNode.insertBefore(mt, fscr);
})();
}
