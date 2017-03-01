var gpio = require("gpio");
var socket = require('socket.io-client')('http://fbchatbot-96204.app.xervo.io');

var turnLightOn = function(pinNumber){
    gpioPin = gpio.export(pinNumber,{
            ready: function(){
              gpioPin.set();
              setTimeout(function() {
                gpioPin.reset();
              }, 1000 );
            }
    });
  }

socket.on('connect', function(){
	console.log("connect emitted from server");
});
socket.on('fb-message', function(data){
	var msg = JSON.parse(data).text;
	console.log(msg);
	
	if(msg.indexOf('green') > -1){
		turnLightOn(18);
	}

	if(msg.indexOf('red') > -1){
		turnLightOn(16);
	}	
});
socket.on('disconnect', function(){
	console.log("disconnected yo!");
});
