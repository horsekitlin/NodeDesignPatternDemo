function DelayedGreeter(name) {
  this.name = name;
  
}

/*DelayedGreeter.prototype.greet = function() {
  setTimeout( function cb() {
    console.log('Hello ' + this.name);
  }, 500);
};*/

DelayedGreeter.prototype.greet = function () {
  setTimeout(() => console.log('Hello' + this.name), 500);
};
const greeter = new DelayedGreeter('World');
greeter.greet(); // will print "Hello undefined"