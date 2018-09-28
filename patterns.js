var awesomeNewModule = (function(){ 
  var exports = {
    foo: 5,
    bar: 10
  };
  
  exports.helloMars = function() {
    console.log("Hello Kakapuu!");
  };
  
  exports.goodbye = function() {
    console.log("Happydbye!");
  };
  
  return exports
  
}());
