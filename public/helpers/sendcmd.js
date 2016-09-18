
var bb = io.connect('http://localhost:3000');

$(function(){
$("#btn-send").click(function(){
    var tt = '';
    tt = $("#val3").val();
    bb.emit('message', tt);
  });

});
