var socket = io.connect('http://localhost:3000');
socket.on('message', function (data) {

 $('#messages').text(data);
 if(data === "go"){
   window.location.replace("/end");
 }


});
