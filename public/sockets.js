var io = require('socket.io');

exports.initialize = function(server) {
 io = io.listen(server);
 io.sockets.on("connection", function(socket){
 socket.emit('message', 'Welcome');
 socket.on('message', function(message){

 socket.broadcast.emit('message', message);




  });
 });

 function str_pad_left(string,pad,length) {
     return (new Array(length+1).join(pad)+string).slice(-length);
 }

 var countdown = 1200;
 setInterval(function() {
   countdown--;
   /*
   if(countdown == 0){
     io.sockets.emit('message', "go");
     countdown = 0;
   }*/
   var minutes = Math.floor(countdown / 60);
   var seconds = countdown - minutes * 60;
   //var timer = minutes.toString() + ":" + seconds.toString();
   var timer = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);

   io.sockets.emit('timer', { countdown: timer });
 }, 1000);

 io.sockets.on('connection', function (socket) {
   socket.on('reset', function (data) {
     countdown = 1000;

     var minutes = Math.floor(countdown / 60);
     var seconds = countdown - minutes * 60;
     //var timer = minutes.toString() + ":" + seconds.toString();
     var timer = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);

     socket.emit('timer', { countdown: timer });
   });
 });



};
