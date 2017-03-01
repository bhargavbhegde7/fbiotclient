var gpio = require("gpio");

var turnLightOn = function(pinNumber){
    gpioPin = gpio.export(pinNumber,{
            ready: function(){
              gpioPin.set();
              setTimeout(function() {
                gpioPin.reset();
              }, 30000 );
            }
    });
  }

turnLightOn(16);
