//var socket = require('socket.io-client')('https://fbchatbot1.appspot.com');
var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function(){
	console.log("connect emitted from server");
});

socket.on('fb-message', function(data){

  var msg = "";
  try{
    msg = JSON.parse(data).text;
  }catch(err){
    msg = data.text;
  }

	console.log(msg);

});
socket.on('disconnect', function(){
	console.log("disconnected!");
});
