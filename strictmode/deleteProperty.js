'use strict'
function test() {
  this.a = 'a';
}

delete test.prototype;