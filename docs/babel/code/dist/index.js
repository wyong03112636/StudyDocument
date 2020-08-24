"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.promise.finally");

var sayHi = function sayHi() {
  console.log('Hello, Babel');
};

Promise.resolve()["finally"]();
sayHi();