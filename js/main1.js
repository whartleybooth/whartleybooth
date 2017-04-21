$(function(){

  $('#bencock').click(function() {

    var img = new Image();
   var div = document.getElementById('controls');

img.onload = function() {
  div.appendChild(img);
};

img.src = '/cockeral-strutting-457396.jpg';

   
  })
});
